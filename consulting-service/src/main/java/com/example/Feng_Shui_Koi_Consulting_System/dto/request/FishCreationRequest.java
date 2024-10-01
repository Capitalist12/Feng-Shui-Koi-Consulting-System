package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.persistence.Column;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FishCreationRequest {
    String name;
    String size;
    String weight;
    String color;
    String description;
    Set<String> imagesURL;
    String koiTypeName;
    Set<String> elements;

}
