package com.example.Feng_Shui_Koi_Consulting_System.dto.user;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateProfileRequest {
    @Size(min = 4, max = 50, message = "USERNAME_INVALID")
    String username;
    String currentPassword;
    String newPassword;
    LocalDate dateOfBirth;
    String imageLink;

}
