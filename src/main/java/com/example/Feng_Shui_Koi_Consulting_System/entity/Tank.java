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
public class Tank {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String shape;
    String position;
    String directionId;
    String elementId;
}
