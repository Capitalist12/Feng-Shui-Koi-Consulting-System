package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenRequest {
    @NotBlank
    @Email
    @Size(min = 3, max = 20, message = "EMAIL_INVALID")
    String email;
    @NotBlank
    @Size(min = 6, max = 40, message = "PASSWORD_INVALID")
    String password;
}
