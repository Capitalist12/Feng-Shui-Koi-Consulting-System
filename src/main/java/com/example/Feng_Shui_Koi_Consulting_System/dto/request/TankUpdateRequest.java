package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TankUpdateRequest {
    String shape;
    String position;
    String directionId;
    String elementId;
}
