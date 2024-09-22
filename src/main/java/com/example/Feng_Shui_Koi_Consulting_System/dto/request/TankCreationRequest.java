package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.persistence.Column;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TankCreationRequest {
    @Column(name = "Shape")
    String shape;
    @Column(name = "ElementID")
    int elementId;
    @Column(name = "ImageID")
    String imageId;
}
