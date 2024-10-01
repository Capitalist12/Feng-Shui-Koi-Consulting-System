package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    String userID;
    String username;
    String password;
    String email;
    LocalDate dateOfBirth;
    String roleName;
    Integer elementID;
    String imageLink;
    String planID;
    boolean deleteStatus;
}
