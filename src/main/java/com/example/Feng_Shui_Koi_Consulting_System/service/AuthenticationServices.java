package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AuthenRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ExchangeTokenRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.IntrospectResquest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AuthenResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.IntrospectResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Roles;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.UserMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.httpclient.OutboundIdentityClient;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import com.example.Feng_Shui_Koi_Consulting_System.repository.httpclient.OutboundUserClient;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
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

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;


@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class AuthenticationServices {
    UserRepository userRepository;
    UserMapper userMapper;
    OutboundIdentityClient outboundIdentityClient;
    OutboundUserClient outboundUserClient;
    ElementCalculationService elementCalculationService;
    ElementRepo elementRepo;

    @NonFinal
    @Value("${jwt.singerKey}")
    protected String SIGNER_KEY;

    @NonFinal
    @Value("${outbound.client-id}")
    protected String CLIENT_ID ;

    @NonFinal
    @Value("${outbound.client-secret}")
    protected String CLIENT_SECRET ;

    @NonFinal
    @Value("${outbound.redirect-uri}")
    protected String REDIRECT_URI ;

    @NonFinal
    protected String GRANT_TYPE = "authorization_code";


//Method to registed user
    public SignUpResponse registerUser(SignUpRequest request) {
        if (userRepository.existsByUsername(request.getUsername()))
            throw new AppException(ErrorCode.USER_EXIST);
        if (userRepository.existsByEmail(request.getEmail()))
            throw new AppException(ErrorCode.EMAIL_EXITST);
        int elementId = elementCalculationService
                .calculateElementId(2006);
        Element element = elementRepo.findById(elementId)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
        User user = userMapper.toUser(request);
        user.setUserID(generateUserID());
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        user.setPassword(passwordEncoder.encode(request.getPassword())); //encode the password to save to database
        user.setRoleName(String.valueOf(Roles.USER));
//        user.setPlanID("PP005");
        user.setElement(element);
        user.setDeleteStatus(false);
        return userMapper.toSignUpResponse(userRepository.save(user));

    }
//Method to login user
    public AuthenResponse loginUser(AuthenRequest request) {
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        boolean authenticated = passwordEncoder.matches(request.getPassword(), user.getPassword());//Check user password
        if (!authenticated)                                                                         //is match with password
            throw new AppException(ErrorCode.UNAUTHENTICATED);                                      //in database
        var token = generateToken(user);

        return AuthenResponse.builder()
                .authenticated(true)
                .username(user.getUsername())
                .token(token)
                .build();

    }

    public IntrospectResponse introspected(IntrospectResquest resquest) throws JOSEException, ParseException {
        var token  = resquest.getToken();

        JWSVerifier jwsVerifier = new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(token);
        Date expepityTime = signedJWT.getJWTClaimsSet().getExpirationTime();
        var verifier = signedJWT.verify(jwsVerifier);
        return IntrospectResponse.builder()
                .valid(expepityTime.after(new Date()) && verifier)
                .build();
    }

    private String generateToken(User user) {
       JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getEmail())
                .issuer("Fengshui.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(2, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("scope",buildScope(user))
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header,payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        }catch (JOSEException e) {
            log.error("Can create token",e);
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

    public AuthenResponse outboundAuthenticate(String code){
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
        var user = userRepository.findByEmail(userInfo.getEmail()).orElseGet(
                ()-> userRepository.save(User.builder()
                                .userID(generateUserID())
                                .email(userInfo.getEmail())
                                .username(userInfo.getName())
                                .password(userInfo.getEmail())
                                .roleName(String.valueOf(Roles.USER))
                                .build()));

        var token = generateToken(user);

        return  AuthenResponse.builder()
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

}


