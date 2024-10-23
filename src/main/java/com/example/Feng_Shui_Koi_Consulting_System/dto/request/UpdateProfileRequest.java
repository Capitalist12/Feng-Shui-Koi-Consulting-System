package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateProfileRequest {
    String username;
    String currentPassword;
    String newPassword;
    LocalDate dateOfBirth;
    String imageLink;

}
