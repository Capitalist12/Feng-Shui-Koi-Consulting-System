package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "koiTypeId")

public class KoiTypes {
    @Id
    @Column(name = "KoiTypeID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    String KoiTypeId;
    @Column(name = "Name ")
    String typeName;
    @Column(name = "Description ", length = 1000)
    String Description;

    @OneToMany(mappedBy = "koiTypes", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    Set<KoiFish> koiFish = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof KoiTypes)) return false;
        KoiTypes koiTypes = (KoiTypes) o;
        return Objects.equals(KoiTypeId, koiTypes.KoiTypeId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(KoiTypeId);
    }

}
