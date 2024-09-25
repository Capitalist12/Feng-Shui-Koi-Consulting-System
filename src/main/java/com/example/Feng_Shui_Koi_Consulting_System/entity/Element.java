package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Element {
    @Id
    @Column(name = "ElementID")
    Integer elementId;
    @Column(name = "ElementName")
    String elementName;
    @Column(name = "Description")
    String description;
    @Column(name = "Quantity")
    String quantity;
    @Column(name = "Direction")
    String direction;
    @Column(name = "Value")
    int value;

    @ManyToMany(mappedBy = "elements")
    @JsonManagedReference
    Set<KoiFish> koiFishSet;

    @OneToMany(mappedBy = "elementTank", cascade = CascadeType.ALL)
    @JsonManagedReference
    Set<Tank> tankShape;

}
