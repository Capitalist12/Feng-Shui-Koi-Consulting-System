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
@Table(name = "KoiFish")
public class KoiFish {
    @Id
    @Column(name = "KoiID")
    String koiId;
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
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "Koi_Element",
            joinColumns = @JoinColumn(name = "KoiID"),
            inverseJoinColumns = @JoinColumn(name = "ElementID")
    )
    Set<KoiElement> elements;
//    public List<String> getElementNames() {
//        return element.stream()
//                .map(KoiElement::getElementName)
//                .collect(Collectors.toList());
//    }
}
