package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AuthenRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.IntrospectResquest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AuthenResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.IntrospectResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Roles;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.UserMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jose.shaded.gson.JsonObject;
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

    @NonFinal
    @Value("${jwt.singerKey}")
    protected String SIGNER_KEY;

//Method to registed user
    public SignUpResponse registerUser(SignUpRequest request) {
        if (userRepository.existsByUsername(request.getUsername()))
            throw new AppException(ErrorCode.USER_EXIST);
        if (userRepository.existsByEmail(request.getEmail()))
            throw new AppException(ErrorCode.EMAIL_EXITST);
        User user = userMapper.toUser(request);
        user.setUserID(generateUserID());
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        user.setPassword(passwordEncoder.encode(request.getPassword())); //encode the password to save to database
        user.setRoleName(String.valueOf(Roles.USER));
        user.setPlanID("1");
        user.setElementID(null);
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
                .subject(user.getUsername())
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

    private String buildScope(User user) {
        return user.getRoleName() != null ? user.getRoleName() : "";
    }

    private String generateUserID() {
        // Implement a method to generate a unique user ID of length 10
        return "U" + String.format("%09d", System.nanoTime() % 1000000000);
    }

}


