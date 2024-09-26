package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
    @NotBlank(message = "This should not be null")
    @Column(name = "ElementName")
    String elementName;
}
