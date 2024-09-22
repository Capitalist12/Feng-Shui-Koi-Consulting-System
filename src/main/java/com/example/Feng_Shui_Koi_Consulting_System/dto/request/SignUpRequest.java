package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SignUpRequest {
    @NotBlank
    @Size(min = 3, max = 20, message = "USERNAME_INVALID")
    String username;
    @NotBlank
    @Size(min = 6, max = 40, message = "PASSWORD_INVALID")
    String password;
    @Email
    @Size(min = 4, max = 40, message = "EMAIL_INVALID" )
    @NotBlank
    String email;
    LocalDate dateOfBirth;



}