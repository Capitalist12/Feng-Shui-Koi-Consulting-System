package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KoiFish {
    @Id
    @Column(name = "KoiID")
    String id;
    @Column(name = "Name")
    String name;
    @Column(name = "Size")
    String size;
    @Column(name = "Weight")
    String weight;
    @Column(name = "Color")
    String color;
    @Column(name = "Description")
    String description;
    @Column(name = "ImageID")
    String imageId;
    @Column(name = "KoiTypeID")
    String koiTypeId;
}
