package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FishCreationRequest {
    String name;
    String color;
    float size;
    float weight;
    String elementId;
    String typeId;
    String description;
    String gender;
}
