package com.example.Feng_Shui_Koi_Consulting_System.dto.user;

import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateProfileResponse {
    String userID;
    String username;
    String password;
    LocalDate dateOfBirth;
    String imageLink;
    String roleName;
}
