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
@Table(name = "Tank")
public class Tank {
    @Id
    @Column(name = "TankID")
    String tankId;
    @Column(name = "Shape")
    String shape;
    @Column(name = "ImageID")
    String imageId;
    @Column(name = "ElementID")
    int elementId;
}
