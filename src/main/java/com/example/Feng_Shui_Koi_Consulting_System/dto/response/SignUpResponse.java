package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SignUpResponse {
    String id;
    String username;
    String password;
    String email;
    LocalDate dob;
    String role;
    boolean status;
}