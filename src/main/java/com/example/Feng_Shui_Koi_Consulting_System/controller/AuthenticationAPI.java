package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AuthenRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.APIResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AuthenResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.AuthenticationServices;
import jakarta.validation.Valid;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/auth")
public class AuthenticationAPI {
    AuthenticationServices authenticationServices;

    @PostMapping("/signup")
    APIResponse<SignUpResponse> registerUser( @RequestBody @Valid SignUpRequest request) {
        return APIResponse.<SignUpResponse>builder()
                .result(authenticationServices.registerUser(request))
                .build();

    }


    @PostMapping("/login")
    APIResponse<AuthenResponse> loginUser(@RequestBody @Valid  AuthenRequest request) {
        var result = authenticationServices.loginUser(request);
        return APIResponse.<AuthenResponse>builder()
                .result(result)
                .build();
    }



}
