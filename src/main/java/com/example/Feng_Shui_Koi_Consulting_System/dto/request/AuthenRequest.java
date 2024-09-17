package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

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
    @Size(min = 3, max = 20)
    String username;
    @NotBlank
    @Size(min = 6, max = 40)
    String password;
}
