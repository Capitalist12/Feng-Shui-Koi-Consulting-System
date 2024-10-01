package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

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
    Integer elementId;
    @Column(name = "ElementName")
    String elementName;
//    @ManyToMany(mappedBy = "elements")
//    private Set<KoiFish> koiFish;
}
