package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.*;
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
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "koiImageId")

public class Koi_Image {
    @Id
    @Column(name = "KoiImageID")
    String koiImageId;
    @Column(name = "KoiImageURL")
    String imageURL;


    @ManyToOne
    @JoinColumn(name = "KoiID", nullable = false, referencedColumnName = "KoiID")
    @JsonBackReference
    KoiFish koiFish;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Koi_Image)) return false;
        Koi_Image koiImage = (Koi_Image) o;
        return Objects.equals(koiImageId, koiImage.koiImageId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(koiImageId);
    }

}
