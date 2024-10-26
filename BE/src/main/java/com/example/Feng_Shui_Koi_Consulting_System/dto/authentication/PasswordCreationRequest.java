package com.example.Feng_Shui_Koi_Consulting_System.dto.authentication;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PasswordCreationRequest {
    @Size(min = 5, max = 40, message = "PASSWORD_INVALID")
    String password;
}
