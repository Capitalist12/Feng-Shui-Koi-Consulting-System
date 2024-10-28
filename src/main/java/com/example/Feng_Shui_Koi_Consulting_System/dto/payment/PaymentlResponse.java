package com.example.Feng_Shui_Koi_Consulting_System.dto.payment;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PaymentlResponse {
    boolean checkout;
    String token;
    String role;
}
