package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SessionDTO;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.PaymentSuccessfulResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Roles;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Transaction;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TransactionRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.CustomerSearchResult;
import com.stripe.model.Subscription;
import com.stripe.model.checkout.Session;
import com.stripe.param.CustomerCreateParams;
import com.stripe.param.CustomerSearchParams;
import com.stripe.param.SubscriptionUpdateParams;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.Objects;


@Service
@Slf4j
public class StripeService {

    @Value("${api.stripe.key}")
    private String stripeApiKey;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationServices authenticationServices;
    @Autowired
    private TransactionRepo transactionRepo;

    @PostConstruct
    public void init(){
        Stripe.apiKey = stripeApiKey;
    }


    private Customer findOrCreateCustomer(String email, String username) throws StripeException {
        CustomerSearchParams params=
                CustomerSearchParams.builder()
                        .setQuery("email:'"+email+"'")
                        .build();
        CustomerSearchResult search = Customer.search(params);
        Customer customer;
        if(search.getData().isEmpty()){
            CustomerCreateParams customerCreateParams=
                    CustomerCreateParams.builder()
                            .setName(username)
                            .setEmail(email)
                            .build();
            customer = Customer.create(customerCreateParams);
        }else {
            customer = search.getData().get(0);
        }
        return customer;

    }

    public SessionDTO createSubscriptionSession(SessionDTO request) {
        try {

            User user = getUserLogin();
            Customer customer = findOrCreateCustomer(user.getEmail(),user.getUsername());
            String clientURL = "http://localhost:8080";

            SessionCreateParams.Builder  sessionCreateParamsBuilder = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
                    .setCustomer(customer.getId())
                    .setSuccessUrl(clientURL + "/success-subscription?session_id={CHECKOUT_SESSION_ID}")
                    .setCancelUrl(clientURL + "/failure");

            String aPackage = String.valueOf(request.getData().get("PACKAGE"));
            // add item and amount
            sessionCreateParamsBuilder.addLineItem(
                    SessionCreateParams.LineItem.builder()
                            .setQuantity(1L)
                            .setPriceData(SessionCreateParams.LineItem.PriceData
                                    .builder()
                                    .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                            .putMetadata("package",aPackage)
                                            .putMetadata("user_id",user.getUserID())
                                            .setName(aPackage)
                                            .build()
                                    )
                                    .setCurrency("USD")
                                    .setUnitAmountDecimal(BigDecimal.valueOf(Objects.equals(aPackage,"YEAR")?99.99 * 100:9.99*100))
                                    //recurring
                                    .setRecurring(SessionCreateParams.LineItem.PriceData.Recurring.builder()
                                            .setInterval(Objects.equals(aPackage,"YEAR")?SessionCreateParams
                                                    .LineItem.PriceData.Recurring.Interval
                                                    .YEAR: SessionCreateParams.LineItem.PriceData
                                                    .Recurring.Interval.MONTH)
                                            .build())
                                    .build())
                            .build()
            ).build();

            SessionCreateParams.SubscriptionData subscriptionData=
                    SessionCreateParams.SubscriptionData.builder()
                            .putMetadata("package",aPackage)
                            .putMetadata("user_id",user.getUserID())
                            .build();
            sessionCreateParamsBuilder.setSubscriptionData(subscriptionData);
            Session session = Session.create(sessionCreateParamsBuilder.build());
            request.setUserID(user.getUserID());
            request.setSessionURL(session.getUrl());
            request.setSessionID(session.getId());

        }catch (StripeException e){

            log.error("Exception createPaymentSession",e);
            request.setMessage(e.getMessage());
        }

        return request;
    }

    public Subscription cancelSubscription(String subscriptionID) {
        try{
            Subscription retrieve = Subscription.retrieve(subscriptionID);
            SubscriptionUpdateParams params = SubscriptionUpdateParams.builder()
                    .setCancelAtPeriodEnd(true)
                    .build();
            return retrieve.update(params);
        }catch (StripeException e) {
            log.error("StripeService (cancelSubscription)", e);
        }
        return null;
    }

    public PaymentSuccessfulResponse handleSubscriptionCompletion(String userID, String sessionID) {
        try {
            if(sessionID == null) throw new AppException(ErrorCode.SESSION_ID_NULL);
            Session fetchedSession = Session.retrieve(sessionID);
            String subscriptionId = fetchedSession.getSubscription();
            cancelSubscription(subscriptionId);

            User user = userRepository.findById(userID)
                    .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
            user.setRoleName(String.valueOf(Roles.MEMBER));
            userRepository.save(user);
            String token =  authenticationServices.generateToken(user);

            saveTransaction(subscriptionId,user);
            return PaymentSuccessfulResponse.builder()
                    .checkout(true)
                    .token(token)
                    .role(user.getRoleName())
                    .build();
        }catch(StripeException e) {
            log.error("Exception : ",e);

        }
        return PaymentSuccessfulResponse.builder()
                .checkout(false)
                .token(null)
                .role(Roles.USER.toString())
                .build();
    }

    private User getUserLogin() {
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new AppException(ErrorCode.EMAIL_NOT_EXIST));
        return user;
    }

    private void saveTransaction( String subscriptionId , User user ) throws StripeException {
        Transaction transaction = transactionRepo.findByUser_UserID(user.getUserID())
                .orElseGet(() -> Transaction.builder()
                        .user(user)
                        .build());
        Subscription sub = Subscription.retrieve(subscriptionId);
        String name = sub.getItems().getData().get(0).getPlan().getInterval();
        transaction.setSubscriptionID(subscriptionId);
        transaction.setSubscriptionName(name.toUpperCase());
        transactionRepo.save(transaction);
    }


}
