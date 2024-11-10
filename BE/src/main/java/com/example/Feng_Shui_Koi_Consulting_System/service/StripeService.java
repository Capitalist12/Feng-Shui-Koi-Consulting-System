package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.payment.PaymentSuccessfulRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.payment.SessionDTO;
import com.example.Feng_Shui_Koi_Consulting_System.dto.payment.PaymentlResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Roles;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Subscriptions;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Transaction;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.SubscriptionRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TransactionRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.*;
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
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;


@Service
@Slf4j
public class StripeService {

    @Value("${api.stripe.key}")
    private String stripeApiKey;
    @Value("${frontend.url}")
    private String frontendUrl;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationServices authenticationServices;
    @Autowired
    private SubscriptionRepo subscriptionRepo;
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

    public boolean checkUserSubcription() {
        AtomicBoolean valid = new AtomicBoolean(true);
        User user = getUserLogin();
         subscriptionRepo.findByUser_UserID(user.getUserID())
                 .ifPresent(subscriptions -> {
                     boolean isActive = authenticationServices.checkSubscription(subscriptions
                             .getSubscriptionID());
                     if(isActive) {
                         valid.set(false);
                     }
                 });
        return valid.get();
    }

    public SessionDTO createSubscriptionSession(SessionDTO request) {
        try {

            User user = getUserLogin();
            if(!checkUserSubcription()) throw new AppException(ErrorCode.SUBSCRIPTION_EXIST);
            Customer customer = findOrCreateCustomer(user.getEmail(),user.getUsername());
            String clientURL = frontendUrl;

            SessionCreateParams.Builder  sessionCreateParamsBuilder = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
                    .setCustomer(customer.getId())
                    .setSuccessUrl(clientURL + "/success-subscription?session_id={CHECKOUT_SESSION_ID}&user_id=" + user.getUserID())
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
                                    .setUnitAmountDecimal(BigDecimal.valueOf(Objects.equals(aPackage,"YEAR")?23.88 * 100:1.99*100))
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
            log.error("StripeService (cancelSubscription): {}", e.getMessage());
        }
        return null;
    }

    public PaymentlResponse handleSubscriptionCompletion(PaymentSuccessfulRequest request) {
        try {
            if(request.getSessionID() == null) throw new AppException(ErrorCode.SESSION_ID_NULL);
            Session fetchedSession = Session.retrieve(request.getSessionID());
            String subscriptionId = fetchedSession.getSubscription();
            cancelSubscription(subscriptionId);

            User user = userRepository.findById(request.getUserID())
                    .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
            user.setRoleName(String.valueOf(Roles.MEMBER));
            userRepository.save(user);
            String token =  authenticationServices.generateToken(user);

            saveSubscription(subscriptionId, user);
            saveTransaction(subscriptionId, user);

            return createPaymentResponse(true, token, user.getRoleName());

        }catch(StripeException e) {
            log.error("StripeException: {}", e.getMessage());
        }
        return createPaymentResponse(false, null, Roles.USER.toString());
    }

    public PaymentlResponse handleSubscriptionFalse() {

            Transaction transaction =  Transaction.builder()
            .transactionName("NULL")
            .price(0.0)
            .status("FALSE")
            .createdDay(LocalDateTime.now())
            .user(getUserLogin())
            .build();
            transactionRepo.save(transaction);

        return createPaymentResponse(false, null, Roles.USER.toString());
    }

    private User getUserLogin() {
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(()-> new AppException(ErrorCode.EMAIL_NOT_EXIST));

    }

    private void saveSubscription( String subscriptionId , User user ) throws StripeException {
        Subscriptions subscriptions = subscriptionRepo.findByUser_UserID(user.getUserID())
                .orElseGet(() -> Subscriptions.builder()
                        .user(user)
                        .build());
        Subscription sub = Subscription.retrieve(subscriptionId);
        String name = sub.getItems().getData().get(0).getPlan().getInterval();
        Long amountInCents = sub.getItems().getData().get(0).getPrice().getUnitAmount();
        double amountInDollars = amountInCents /100.0;
        subscriptions.setSubscriptionID(subscriptionId);
        subscriptions.setSubscriptionName(name.toUpperCase());
        subscriptions.setPrice(amountInDollars);
        subscriptionRepo.save(subscriptions);
    }

    private void saveTransaction( String subscriptionId , User user ) throws StripeException {

        Transaction transaction = new Transaction();
        Subscription sub = Subscription.retrieve(subscriptionId);
        Long amountInCents = sub.getItems().getData().get(0).getPrice().getUnitAmount();
        double amountInDollars = amountInCents /100.0;
        String name = sub.getItems().getData().get(0).getPlan().getInterval();
        Long createdTimestamp = sub.getCreated();
        LocalDateTime createdDate = Instant.ofEpochSecond(createdTimestamp)
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();
        transaction.setTransactionName(name.toUpperCase());
        transaction.setPrice(amountInDollars);
        transaction.setCreatedDay(createdDate);
        transaction.setUser(user);
        transaction.setStatus(getTransactionStatus(sub).toUpperCase());

        transactionRepo.save(transaction);
    }


    private String getTransactionStatus(Subscription sub) throws StripeException {
        String status = null;
        String paymentIntentId = Invoice.retrieve(sub.getLatestInvoice()).getPaymentIntent();
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("payment_intent", paymentIntentId); // Lọc theo PaymentIntent ID
        List<Charge> charges = Charge.list(chargeParams).getData(); // Lấy các charge liên quan

        if(!charges.isEmpty()) {
            status = charges.get(0).getStatus();
        }

        return status;
    }

    private PaymentlResponse createPaymentResponse(boolean checkout, String token, String role) {
        return PaymentlResponse.builder()
                .checkout(checkout)
                .token(token)
                .role(role)
                .build();
    }


}
