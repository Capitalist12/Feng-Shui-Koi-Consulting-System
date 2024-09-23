package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "Element")
public class KoiElement {
    @Id
    @Column(name = "ElementID")
    String elementId;
    @Column(name = "ElementName")
    String elementName;
}
