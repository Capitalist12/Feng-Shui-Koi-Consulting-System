package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class ResetPasswordRequest {
    @Email
    String email;
    @NotBlank
    String otp;
    @Size(min = 5, max = 20, message = "PASSWORD_INVALID")
    String newPassword;
}
