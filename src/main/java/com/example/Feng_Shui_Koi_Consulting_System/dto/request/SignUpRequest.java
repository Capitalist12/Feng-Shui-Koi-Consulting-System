package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

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
    @Size(min = 3, max = 20)
    String username;
    @NotBlank
    @Size(min = 6, max = 40)
    String password;
    @Email
    @Size(max = 50)
    @NotBlank
    String email;
    LocalDate dob;



}