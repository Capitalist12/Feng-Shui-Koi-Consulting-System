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

    @PostMapping("/signup")
    ApiResponse<SignUpResponse> registerUser(@RequestBody @Valid SignUpRequest request) {
            emailService.sendEmail(
                    request.getEmail().trim(),
                    "Welcome " + request.getUsername() + "!\nYour password is: " + request.getPassword(),
                    "Account Creation Successful");
            SignUpResponse registerUser = authenticationServices.registerUser(request);

            return ApiResponse.<SignUpResponse>builder()
                    .result(registerUser)
                    .build();
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
