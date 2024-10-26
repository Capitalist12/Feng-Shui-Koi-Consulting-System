package com.example.Feng_Shui_Koi_Consulting_System.dto.compatibility;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CompatibilityResponse {
    double fishCompatibilityScore;
    double tankCompatibilityScore;
    double calculateCompatibilityScore;
    String advise;

}
