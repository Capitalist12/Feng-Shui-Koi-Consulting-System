package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.persistence.Column;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FishUpdateRequest {
    String name;
    String size;
    String weight;
    String color;
    String description;
    String imageId;
    String koiTypeId;
    Integer elementID;
}
