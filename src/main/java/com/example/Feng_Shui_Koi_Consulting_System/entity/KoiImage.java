package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Koi_Image")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KoiImage {
    @Id
    @Column(name = "KoiImageID")
    String koiImageID;

    @Column(name = "KoiImageURL")
    String koiImageURL;
}
