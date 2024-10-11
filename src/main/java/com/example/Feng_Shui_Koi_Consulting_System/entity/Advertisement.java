package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
@Entity
@Table(name = "Advertisement")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Advertisement {
    @Id
    @Column(name = "AdID")
    String adID;

    @Column(name = "Title")
    String title;

    @Column(name = "Description")
    String description;

    @Column(name = "Price")
    Float price;

    @ManyToOne
    @JoinColumn(name = "ElementID", referencedColumnName = "ElementID")
    @Column(name = "ElementID")
    int elementID;

    @ManyToOne
    @JoinColumn(name = "CategoryID", referencedColumnName = "CategoryID")
    @Column(name = "CategoryID")
    String categoryID;

    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "UserID")
    @Column(name = "UserID")
    String userID;

    @Column(name = "AdImageID")
    String adImageID;

}
