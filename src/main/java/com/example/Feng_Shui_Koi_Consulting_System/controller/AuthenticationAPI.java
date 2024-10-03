package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AuthenRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.IntrospectResquest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
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
    ApiResponse<SignUpResponse> registerUser( @RequestBody @Valid SignUpRequest request) {
        SignUpResponse registerUser = authenticationServices.registerUser(request);
        emailService.sendEmail(
                request.getEmail().trim(),
                "Welcome " + request.getUsername() + "!\nYour password is: " + request.getPassword(),
                "Account Creation Successful");
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



}
