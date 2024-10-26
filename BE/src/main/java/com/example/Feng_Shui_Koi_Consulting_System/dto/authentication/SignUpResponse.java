package com.example.Feng_Shui_Koi_Consulting_System.dto.authentication;

import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SignUpResponse {
    String userID;
    String username;
    String password;
    LocalDate dateOfBirth;
    String email;
    String imageLink;
    String roleName;
    String planID;
    String element;
    boolean deleteStatus;
}