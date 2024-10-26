package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

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
    @Column(name = "Description", length = 1000)
    String description;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "KoiTypeID", nullable = false, referencedColumnName = "KoiTypeID")
    @JsonIgnore
    KoiTypes koiTypes;

    @OneToMany(mappedBy = "koiFish", cascade = CascadeType.ALL
            ,orphanRemoval = true)
    @JsonManagedReference
    Set<Koi_Image> imagesFish = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "Koi_Element",
            joinColumns = @JoinColumn(name = "KoiID"),
    inverseJoinColumns = @JoinColumn(name = "ElementID"))
    @JsonManagedReference
    Set<Element> elements;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof KoiFish)) return false;
        KoiFish koiFish = (KoiFish) o;
        return Objects.equals(id, koiFish.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
