package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

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

    @Column(name = "Status")
    String status;

//    @Column(name = "CreatedDate")
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
//    LocalDateTime createdDate;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "ElementID", nullable = false, referencedColumnName = "ElementID")
    @JsonBackReference
    Element element;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "CategoryID", nullable = false, referencedColumnName = "CategoryID")
    @JsonBackReference
    Category category;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "UserID", nullable = false, referencedColumnName = "UserID")
    @JsonBackReference
    User user;

    @OneToMany(mappedBy = "advertisement", cascade = CascadeType.ALL
            ,orphanRemoval = true)
    @JsonManagedReference
    Set<Ads_Image> imagesAd = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Advertisement)) return false;
        Advertisement advertisement = (Advertisement) o;
        return Objects.equals(adID, advertisement.adID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(adID);
    }
}
