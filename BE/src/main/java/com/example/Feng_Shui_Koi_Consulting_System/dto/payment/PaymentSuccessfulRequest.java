package com.example.Feng_Shui_Koi_Consulting_System.dto.payment;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PaymentSuccessfulRequest {
    @NotBlank
    String userID;
    @NotBlank
    String sessionID;
}
