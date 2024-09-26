package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KoiTypeUpdateRequest {
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
