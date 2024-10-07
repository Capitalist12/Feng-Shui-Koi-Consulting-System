package com.example.Feng_Shui_Koi_Consulting_System.dto.request;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DOBCreationRequest {
    LocalDate dateOfBirth;
}
