package com.example.Feng_Shui_Koi_Consulting_System.dto.consulting;

import jakarta.validation.constraints.Pattern;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CalculateElementRequest {
    LocalDate dob;
}
