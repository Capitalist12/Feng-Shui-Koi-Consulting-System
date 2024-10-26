package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Objects;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Ads_Image {
    @Id
    @Column(name = "AdImageID")
    String adImageId;
    @Column(name = "AdImageURL")
    String imageURL;

    @ManyToOne
    @JoinColumn(name = "AdID", nullable = false,  referencedColumnName = "AdID")
    @JsonBackReference
    Advertisement advertisement;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Ads_Image)) return false;
        Ads_Image adImage = (Ads_Image) o;
        return Objects.equals(adImageId, adImage.adImageId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(adImageId);
    }

}
