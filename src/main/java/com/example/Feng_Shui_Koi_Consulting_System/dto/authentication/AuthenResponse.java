package com.example.Feng_Shui_Koi_Consulting_System.dto.authentication;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenResponse {
    boolean authenticated;
    String username;
    String roleName;
    String token;
}