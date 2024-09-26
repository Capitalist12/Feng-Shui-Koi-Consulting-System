package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "KoiTypes")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KoiType {
    @Id
    @Column(name = "KoiTypeID")
    String koiTypeID;

    @Column(name = "Name")
    String koiTypeName;

    @Column(name = "Description")
    String description;

    @OneToMany(mappedBy = "koiTypeID", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    Set<KoiFish> koiFishes;
}
