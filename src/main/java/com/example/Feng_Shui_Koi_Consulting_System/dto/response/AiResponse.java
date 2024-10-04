package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AiResponse {
    String userElement;
    Set<Set<String>> koiFishColors;
    String tankShape;
    double calculateCompatibilityScore;
    String advice;
}
