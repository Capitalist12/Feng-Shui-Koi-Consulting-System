package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.*;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AuthenResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.IntrospectResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.AuthenticationServices;
import com.example.Feng_Shui_Koi_Consulting_System.service.EmailService;
import com.nimbusds.jose.JOSEException;
import jakarta.validation.Valid;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/auth")
public class AuthenticationAPI {
    AuthenticationServices authenticationServices;
    EmailService emailService;

    @PostMapping("/outbound/authentication")
    ApiResponse<AuthenResponse> outboundAuthenticate(
        @RequestParam("code") String code){
        var result = authenticationServices.outboundAuthenticate(code);
        return ApiResponse.<AuthenResponse>builder().result(result).build();

    }


    @PostMapping("/signup")
    ApiResponse<SignUpResponse> registerUser(@RequestBody @Valid SignUpRequest request) {
            return ApiResponse.<SignUpResponse>builder()
                    .result(authenticationServices.registerUser(request))
                    .build();
    }
    @PostMapping("/token")
    ApiResponse<AuthenResponse> authenticate(@RequestBody AuthenRequest request) {
        var result = authenticationServices.authenticate(request);
        return ApiResponse.<AuthenResponse>builder().result(result).build();
    }

    @PostMapping("/login")
    ApiResponse<AuthenResponse> loginUser(@RequestBody @Valid  AuthenRequest request) {
        var result = authenticationServices.loginUser(request);
        return ApiResponse.<AuthenResponse>builder()
                .result(result)
                .build();
    }

    @PostMapping("/introspect")
    ApiResponse<IntrospectResponse> introspect(@RequestBody IntrospectResquest request) throws ParseException, JOSEException {
        var valid = authenticationServices.introspected(request);
        return ApiResponse.<IntrospectResponse>builder()
                .result(valid)
                .build();
    }

    @PostMapping("/forgot-password")
    String forgotPassword(@RequestBody @Valid ForgotPasswordRequest request){
        authenticationServices.forgotPassword(request);
        return "An OTP has been sent to your email. Please verify it to reset your password.";
    }

    @PostMapping("/reset-password")
    String resetPassword(@RequestBody @Valid ResetPasswordRequest request){
        return authenticationServices.verifyOtpAndResetPassword(request);
    }
}
