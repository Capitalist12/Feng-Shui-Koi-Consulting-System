package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.payment.PaymentSuccessfulRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.payment.SessionDTO;
import com.example.Feng_Shui_Koi_Consulting_System.dto.payment.PaymentlResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.StripeService;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class StripeController {
    StripeService stripeService;



    @PostMapping("/session/subscription")
    @ResponseBody
    public ApiResponse<SessionDTO> createSubscriptionSession(@RequestBody SessionDTO model) {
        SessionDTO afterPayment = stripeService.createSubscriptionSession(model);
        return ApiResponse.<SessionDTO>builder()
                .result(afterPayment)
                .build();
    }

    @PutMapping("/payment-success")
    @ResponseBody
    public ApiResponse<PaymentlResponse> paymentSuccessfull(@RequestBody PaymentSuccessfulRequest request) {
        return ApiResponse.<PaymentlResponse>builder()
                .result(stripeService.handleSubscriptionCompletion(request)    )
                .build();
    }

    @PutMapping("/payment-false")
    @ResponseBody
    public ApiResponse<PaymentlResponse> paymentSuccessfull() {
        return ApiResponse.<PaymentlResponse>builder()
                .result(stripeService.handleSubscriptionFalse()    )
                .build();
    }
}
