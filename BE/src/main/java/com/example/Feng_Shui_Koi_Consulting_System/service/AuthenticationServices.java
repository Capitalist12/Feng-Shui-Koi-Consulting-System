package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.*;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AuthenResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.IntrospectResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Roles;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.UserMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TransactionRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.httpclient.OutboundIdentityClient;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import com.example.Feng_Shui_Koi_Consulting_System.repository.httpclient.OutboundUserClient;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import com.stripe.exception.StripeException;
import com.stripe.model.Subscription;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;

import java.security.SecureRandom;
import java.text.ParseException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationServices {
    UserRepository userRepository;
    UserMapper userMapper;
    OutboundIdentityClient outboundIdentityClient;
    OutboundUserClient outboundUserClient;
    EmailService emailService;
    private Map<String, String> otpData = new HashMap<>();
    private Map<String, LocalDateTime> otpExpiry = new HashMap<>();
    ElementRepo elementRepo;
    ElementCalculationService elementCalculationService;
    TransactionRepo transactionRepo;

    @NonFinal
    @Value("${jwt.singerKey}")
    protected String SIGNER_KEY;

    @NonFinal
    @Value("${outbound.client-id}")
    protected String CLIENT_ID;

    @NonFinal
    @Value("${outbound.client-secret}")
    protected String CLIENT_SECRET;

    @NonFinal
    @Value("${outbound.redirect-uri}")
    protected String REDIRECT_URI;

    @NonFinal
    protected String GRANT_TYPE = "authorization_code";


    //Method to register user
    public SignUpResponse registerUser(SignUpRequest request) {
//        if (request.getOtp().isEmpty())
//            throw new AppException(ErrorCode.OTP_REQUIRED);
//        if (!validateOTP(request.getEmail().trim(), request.getOtp()))
//            throw new AppException(ErrorCode.OTP_NOT_FOUND);
        if (userRepository.existsByUsername(request.getUsername()))
            throw new AppException(ErrorCode.USER_EXIST);
        int elementId = elementCalculationService
                .calculateElementId(request.getDateOfBirth());
        Element element = elementRepo.findById(elementId)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        User user = userMapper.toUser(request);

        user.setUserID(generateUserID());

        user.setPassword(passwordEncoder.encode(request.getPassword())); //encode the password to save to database
        user.setRoleName(String.valueOf(Roles.USER));
//        user.setPlanID("PP005");
        user.setElement(element);
        user.setDeleteStatus(false);
//        clearOTP(request.getEmail().trim());
//        emailService.sendEmail(request.getEmail(),
//                "This is your password: " + request.getPassword(),
//                "Create User Successful");

        return userMapper.toSignUpResponse(userRepository.save(user));
    }

    public void sendOTPToEmail(@Valid SendOTPRequest request) {
        if (userRepository.existsByEmail(request.getEmail()))
            throw new AppException(ErrorCode.EMAIL_EXITST);
        String otp = generateOTP();
        storeOTP(request.getEmail().trim(), otp);
        emailService.sendEmail(request.getEmail().trim(),
                "Your OTP Code: " + otp, "OTP for Consulting Website");
        System.out.println("OTP sent to: " + request.getEmail().trim());
    }

    //Method to login user
    public AuthenResponse loginUser(AuthenRequest request) throws StripeException {
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));
        // Check for the transaction and subscription status
        transactionRepo.findByUser_UserID(user.getUserID())
                .ifPresent(transaction -> {
                    boolean isSubscriptionActive = checkSubscription(
                            transaction.getSubscriptionID()
                    );
                    if (!isSubscriptionActive) {
                        user.setRoleName(Roles.USER.toString());
                        userRepository.save(user);
                    }
                });
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        //Check user password is match with password in database
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }
        var token = generateToken(user);
        return AuthenResponse.builder()
                .authenticated(true)
                .username(user.getUsername())
                .roleName(user.getRoleName())
                .token(token)
                .build();
    }

    public IntrospectResponse introspected(IntrospectResquest resquest) throws JOSEException, ParseException {
        var token = resquest.getToken();

        JWSVerifier jwsVerifier = new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(token);
        Date expepityTime = signedJWT.getJWTClaimsSet().getExpirationTime();
        var verifier = signedJWT.verify(jwsVerifier);
        return IntrospectResponse.builder()
                .valid(expepityTime.after(new Date()) && verifier)
                .build();
    }

    public String resetPassword(ResetPasswordRequest request) {
        boolean isOtpValid = validateOTP(request.getEmail().trim(), request.getOtp());

        if (isOtpValid) {
            User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));

            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
            user.setPassword(passwordEncoder.encode(request.getNewPassword()));
            userRepository.save(user);
            clearOTP(request.getEmail().trim());

            emailService.sendEmail(request.getEmail().trim(),
                    "Your password has been successfully changed.",
                    "Password Change Confirmation");

            return "Password has been successfully changed.";
        } else {
            return "Invalid or expired OTP. Please request a new OTP.";
        }
    }

    public String generateOTP() {
        String CHARACTERS = "0123456789";
        int OTP_LENGTH = 6;
        SecureRandom random = new SecureRandom();
        StringBuilder otp = new StringBuilder(OTP_LENGTH);
        for (int i = 0; i < OTP_LENGTH; i++) {
            otp.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
        }
        return otp.toString();
    }

    public void storeOTP(String email, String otp) {
        otpData.put(email, otp);
        otpExpiry.put(email, LocalDateTime.now().plusMinutes(5));
    }

    public boolean validateOTP(String email, String inputOtp) {
        String storedOTP = otpData.get(email);
        LocalDateTime expiryOTP = otpExpiry.get(email);
        if (storedOTP == null || expiryOTP == null) {
            return false;
        }
        if (expiryOTP.isBefore(LocalDateTime.now())) {
            otpData.remove(email);
            otpExpiry.remove(email);
            return false;
        }
        if (storedOTP.equals(inputOtp)) {
            otpData.remove(email);
            otpExpiry.remove(email);
            return true;
        }
        return false;
    }

    public void clearOTP(String email) {
        otpData.remove(email);
        otpExpiry.remove(email);
    }

    public String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getEmail())
                .issuer("Fengshui.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(2, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("scope", buildScope(user))
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Can create token", e);
            throw new RuntimeException(e);
        }
    }

    public AuthenResponse authenticate(AuthenRequest request) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        var user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

        boolean authenticated = passwordEncoder.matches(request.getPassword(), user.getPassword());

        if (!authenticated) throw new AppException(ErrorCode.UNAUTHENTICATED);

        var token = generateToken(user);

        return AuthenResponse.builder().token(token).authenticated(true).build();
    }

    public AuthenResponse outboundAuthenticate(String code) {
        var response = outboundIdentityClient
                .exchangeToken(ExchangeTokenRequest.builder()
                        .code(code)
                        .clientID(CLIENT_ID)
                        .clientSecret(CLIENT_SECRET)
                        .redirectUri(REDIRECT_URI)
                        .grantType(GRANT_TYPE)
                        .build());

        log.info("TOKEN RESPONSE{}", response);

        // Get user info
        var userInfo = outboundUserClient.getUserInfo("json", response.getAccessToken());

        log.info("User info{}:", userInfo);

        //On board user
        Element element = elementRepo.findById(6)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

        var user = userRepository.findByEmail(userInfo.getEmail()).orElseGet(
                () -> userRepository.save(User.builder()
                        .userID(generateUserID())
                        .email(userInfo.getEmail())
                        .username(userInfo.getName())
                        .roleName(String.valueOf(Roles.USER))
                        .element(element)
                        .password("")
                        .build()));

        var token = generateToken(user);

        return AuthenResponse.builder()
                .username(user.getUsername())
                .roleName(user.getRoleName())
                .token(token)
                .build();
    }

    private String buildScope(User user) {
        return user.getRoleName() != null ? user.getRoleName() : "";
    }

    private String generateUserID() {
        // Implement a method to generate a unique user ID of length 10
        return "U" + String.format("%09d", System.nanoTime() % 1000000000);
    }

    public boolean checkSubscription(String subscriptionId) {
        try {
            Subscription subscription = Subscription.retrieve(subscriptionId);
            if ("active".equals(subscription.getStatus())) {
                long currentTime = System.currentTimeMillis() / 1000L;
                long subscriptionEndTime = subscription.getCurrentPeriodEnd();
                if (subscriptionEndTime > currentTime) {
                    return true;
                }
            }
        } catch (StripeException e) {
            log.error("Exception: ", e);
        }
        return false;
    }

}


