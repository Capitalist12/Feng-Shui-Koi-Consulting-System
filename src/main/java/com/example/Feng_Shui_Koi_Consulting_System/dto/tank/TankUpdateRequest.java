package com.example.Feng_Shui_Koi_Consulting_System.dto.tank;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TankUpdateRequest {
    String shape;
    String element;
    String imageURL;
}