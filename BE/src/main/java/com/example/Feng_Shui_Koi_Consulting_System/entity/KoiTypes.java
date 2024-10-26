package com.example.Feng_Shui_Koi_Consulting_System.entity;

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
public class KoiTypes {
    @Id
    @Column(name = "KoiTypeID")
    String koiTypeId;
    @Column(name = "Name ")
    String typeName;
    @Column(name = "Description ", length = 1000)
    String description;

    @OneToMany(mappedBy = "koiTypes", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    Set<KoiFish> koiFish = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof KoiTypes)) return false;
        KoiTypes koiTypes = (KoiTypes) o;
        return Objects.equals(koiTypeId, koiTypes.koiTypeId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(koiTypeId);
    }

}
