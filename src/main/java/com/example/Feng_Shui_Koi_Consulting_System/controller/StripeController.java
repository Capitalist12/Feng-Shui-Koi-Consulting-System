package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SessionDTO;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.PaymentSuccessfulResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.StripeService;
import jakarta.servlet.http.HttpSession;
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
    public ApiResponse<SessionDTO> createSubscriptionSession(@RequestBody SessionDTO model,
                                                             HttpSession session) {
        SessionDTO afterPayment = stripeService.createSubscriptionSession(model);
        session.setAttribute("SessionID", afterPayment.getSessionID());
        session.setAttribute("UserID", afterPayment.getUserID());

        return ApiResponse.<SessionDTO>builder()
                .result(afterPayment)
                .build();
    }

    @PutMapping("/payment-success")
    @ResponseBody
    public ApiResponse<PaymentSuccessfulResponse> paymentSuccessfull(HttpSession session) {
        String sessionID = (String) session.getAttribute("SessionID");
        String userID = (String) session.getAttribute("UserID");
        return ApiResponse.<PaymentSuccessfulResponse>builder()
                .result(stripeService.handleSubscriptionCompletion(userID,sessionID)    )
                .build();
    }
}
