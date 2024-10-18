package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CompatibilityRequest {
    String userElement;
    Set<Set<String>> koiFishColors;
    String tankShape;
}
