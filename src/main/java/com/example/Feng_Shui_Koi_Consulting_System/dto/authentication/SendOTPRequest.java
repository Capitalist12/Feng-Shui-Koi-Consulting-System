package com.example.Feng_Shui_Koi_Consulting_System.dto.authentication;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SendOTPRequest {

    @Email
    @Size(min = 4, max = 50, message = "EMAIL_INVALID" )
    @NotBlank
    String email;
}
