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
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;


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
    private SubscriptionRepo subscriptionRepo;
    @Autowired
    private TransactionRepo transactionRepo;



    @PostConstruct
    public void init(){
        Stripe.apiKey = stripeApiKey;
    }

//Method to check user have in stripe by email or not
    private Customer findOrCreateCustomer(String email, String username) throws StripeException {
        //Create search parameter to query customer by email
        CustomerSearchParams params=
                CustomerSearchParams.builder()
                        .setQuery("email:'"+email+"'")
                        .build();
        CustomerSearchResult search = Customer.search(params);
        Customer customer;
        //if customer not fount will create new customer
        if(search.getData().isEmpty()){
            CustomerCreateParams customerCreateParams=
                    CustomerCreateParams.builder()
                            .setName(username)
                            .setEmail(email)
                            .build();
            customer = Customer.create(customerCreateParams);
        }else {
            customer = search.getData().get(0); //get customer found by mail
        }
        return customer;

    }
//Check user have purchased subscription packegae or not
    public boolean checkUserSubcription() {
        //Create AtomicBoolean to track the user has a valid subscription or not
        AtomicBoolean valid = new AtomicBoolean(true);
        User user = getUserLogin();
        //check user purchased subscription or not
         subscriptionRepo.findByUser_UserID(user.getUserID())
                 .ifPresent(subscriptions -> {
                     // Check the subscription is active
                     boolean isActive = authenticationServices.checkSubscription(subscriptions
                             .getSubscriptionID());
                     if(isActive) {
                         valid.set(false);//user already has a subscription
                     }
                 });
        return valid.get();
    }

    public SessionDTO createSubscriptionSession(SessionDTO request) {
        try {
            //Get user logged
            User user = getUserLogin();
            //check user purchased subscription or not
            if(!checkUserSubcription()) throw new AppException(ErrorCode.SUBSCRIPTION_EXIST);
            //Method to check user have in stripe or not
            Customer customer = findOrCreateCustomer(user.getEmail(),user.getUsername());
            //base client URL for redirect after payment
            String clientURL = "http://localhost:5173";
            // Creat session parameters for a Stripe subscription
            SessionCreateParams.Builder  sessionCreateParamsBuilder = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
                    .setCustomer(customer.getId())
                    .setSuccessUrl(clientURL + "/success-subscription?session_id={CHECKOUT_SESSION_ID}&user_id=" + user.getUserID())
                    .setCancelUrl(clientURL + "/failure");
            //Get type of subscription package in request
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
                                    // Set amount based on package type
                                    .setUnitAmountDecimal(BigDecimal.valueOf(Objects.equals(aPackage,"YEAR")?23.88 * 100:1.99*100))
                                    //recurring
                                    .setRecurring(SessionCreateParams.LineItem.PriceData.Recurring.builder()
                                            // Set interval (YEAR or MONTH)
                                            .setInterval(Objects.equals(aPackage,"YEAR")?SessionCreateParams
                                                    .LineItem.PriceData.Recurring.Interval
                                                    .YEAR: SessionCreateParams.LineItem.PriceData
                                                    .Recurring.Interval.MONTH)
                                            .build())
                                    .build())
                            .build()
            ).build();
            // Create subscription data
            SessionCreateParams.SubscriptionData subscriptionData=
                    SessionCreateParams.SubscriptionData.builder()
                            .putMetadata("package",aPackage)
                            .putMetadata("user_id",user.getUserID())
                            .build();
            sessionCreateParamsBuilder.setSubscriptionData(subscriptionData);
            // Create the Stripe session
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
//Method to cancel recurring subscription package
    public Subscription cancelSubscription(String subscriptionID) {
        try{
            // Get the subscription from Stripe
            Subscription retrieve = Subscription.retrieve(subscriptionID);
            SubscriptionUpdateParams params = SubscriptionUpdateParams.builder()
                    .setCancelAtPeriodEnd(true)// Set to cancel at the period's end
                    .build();
            return retrieve.update(params);
        }catch (StripeException e) {
            log.error("StripeService (cancelSubscription): {}", e.getMessage());
        }
        return null;
    }
//Method handle successful transaction
    public PaymentlResponse handleSubscriptionCompletion(PaymentSuccessfulRequest request) {
        try {
            if(request.getSessionID() == null) throw new AppException(ErrorCode.SESSION_ID_NULL);
            // Get the subscription from Stripe
            Session fetchedSession = Session.retrieve(request.getSessionID());
            // Extract the subscription ID from the session
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
    //Method handle fail transaction
    public PaymentlResponse handleSubscriptionFalse() {
            //Create transaction when payment fail
            Transaction transaction =  Transaction.builder()
            .transactionName("NULL")
            .price(0.0)
            .status("FALSE")
            .createdDay(new Date())
            .user(getUserLogin())
            .build();
            transactionRepo.save(transaction);
        return createPaymentResponse(false, null, Roles.USER.toString());
    }
//Method to get user's information logged
    private User getUserLogin() {
        //Get user logged in context
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(()-> new AppException(ErrorCode.EMAIL_NOT_EXIST));

    }
//Method to save subscription package to data
    private void saveSubscription( String subscriptionId , User user ) throws StripeException {
        Subscriptions subscriptions = subscriptionRepo.findByUser_UserID(user.getUserID())
                .orElseGet(() -> Subscriptions.builder()
                        .user(user)
                        .build());
        //Get subscription from stripe
        Subscription sub = Subscription.retrieve(subscriptionId);
        //Get interval of subscription
        String name = sub.getItems().getData().get(0).getPlan().getInterval();
        //Get price of subscription
        Long amountInCents = sub.getItems().getData().get(0).getPrice().getUnitAmount();
        double amountInDollars = amountInCents /100.0;
        subscriptions.setSubscriptionID(subscriptionId);
        subscriptions.setSubscriptionName(name.toUpperCase());
        subscriptions.setPrice(amountInDollars);
        subscriptionRepo.save(subscriptions);
    }
//Method to save transaction  to data
    private void saveTransaction( String subscriptionId , User user ) throws StripeException {

        Transaction transaction = new Transaction();
        Subscription sub = Subscription.retrieve(subscriptionId);
        //Get price of subscription
        Long amountInCents = sub.getItems().getData().get(0).getPrice().getUnitAmount();
        double amountInDollars = amountInCents /100.0;
        //Get interval of subscription
        String name = sub.getItems().getData().get(0).getPlan().getInterval();
        //Get created day of subscription
        Long createdTimestamp = sub.getCreated();
        //Get end day of subscription
        Long endTimestamp = sub.getCurrentPeriodEnd();
        //Convert created day to Date
        Date createdDate = Date.from(Instant.ofEpochSecond(createdTimestamp)
                .atZone(ZoneId.systemDefault())
                .toInstant());
        //Convert end day to Date
        Date endDate = Date.from(Instant.ofEpochSecond(endTimestamp)
                .atZone(ZoneId.systemDefault())
                .toInstant());
        transaction.setTransactionName(name.toUpperCase());
        transaction.setPrice(amountInDollars);
        transaction.setCreatedDay(createdDate);
        transaction.setEndDay(endDate);
        transaction.setUser(user);
        transaction.setStatus(getTransactionStatus(sub).toUpperCase());

        transactionRepo.save(transaction);
    }

//Method to get transaction status
    private String getTransactionStatus(Subscription sub) throws StripeException {
        String status = null;
        //Get invoice from stripe
        String paymentIntentId = Invoice.retrieve(sub.getLatestInvoice()).getPaymentIntent();
        // Prepare parameters to fetch the charge details
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("payment_intent", paymentIntentId);
        List<Charge> charges = Charge.list(chargeParams).getData();
        if(!charges.isEmpty()) {
            status = charges.get(0).getStatus();
        }

        return status;
    }
//Method create payment response
    private PaymentlResponse createPaymentResponse(boolean checkout, String token, String role) {
        return PaymentlResponse.builder()
                .checkout(checkout)
                .token(token)
                .role(role)
                .build();
    }


}
