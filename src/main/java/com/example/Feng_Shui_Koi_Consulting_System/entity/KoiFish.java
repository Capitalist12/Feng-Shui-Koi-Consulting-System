package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String name;
    String color;
    float size;
    float weight;
    String elementId;
    String typeId;
    String description;
    String gender;
}
