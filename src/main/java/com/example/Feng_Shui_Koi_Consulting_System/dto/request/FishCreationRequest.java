package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.persistence.Column;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FishCreationRequest {
    @Column(name = "Name")
    String name;
    @Column(name = "Size")
    float size;
    @Column(name = "Weight")
    float weight;
    @Column(name = "Color")
    String color;
    @Column(name = "Description")
    String description;
    @Column(name = "ImageID")
    String imageId;
    @Column(name = "KoiTypeID")
    String koiTypeId;
}
