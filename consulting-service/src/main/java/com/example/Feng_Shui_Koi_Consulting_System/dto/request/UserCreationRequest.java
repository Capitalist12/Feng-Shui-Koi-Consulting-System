package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserCreationRequest {
    @Size(min = 4, max = 12, message = "USERNAME_INVALID")
    String username;
    @Size(min = 5, max = 20, message = "PASSWORD_INVALID")
    String password;
    String email;
    LocalDate dateOfBirth;
    Integer elementID;
    String imageLink;
    String planID;
    boolean deleteStatus;

}
