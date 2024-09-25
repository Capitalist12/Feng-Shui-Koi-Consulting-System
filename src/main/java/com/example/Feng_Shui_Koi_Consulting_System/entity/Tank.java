package com.example.Feng_Shui_Koi_Consulting_System.entity;

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
public class Tank {
    @Id
    @Column(name = "TankID")
    String tankId;
    @Column(name = "Shape")
    String shape;
    @Column(name = "ImageURL")
    String imageURL;

    @ManyToOne
    @JoinColumn(name = "ElementID", nullable = false, referencedColumnName = "ElementID")
    Element elementTank;
}
