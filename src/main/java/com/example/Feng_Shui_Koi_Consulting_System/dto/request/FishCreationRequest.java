package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiElement;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiImage;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Collection;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FishCreationRequest {
    @Id
    @Column(name = "KoiID")
    String koiId;

    @NotBlank(message = "This should not be null")
    @Column(name = "Name")
    String name;

    @NotBlank(message = "This should not be null")
    @Column(name = "Size")
    String size;

    @NotBlank(message = "This should not be null")
    @Column(name = "Weight")
    String weight;

    @NotBlank(message = "This should not be null")
    @Column(name = "Color")
    String color;

    @NotBlank(message = "This should not be null")
    @Column(name = "Description")
    String description;

    @NotBlank(message = "This should not be null")
    @Column(name = "KoiTypeID")
    String koiTypeId;

    @Column(name = "ImageID")
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "koiFish", cascade = CascadeType.ALL)
    Set<KoiImage> ImageID;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "Koi_Element",
            joinColumns = @JoinColumn(name = "KoiID"),
            inverseJoinColumns = @JoinColumn(name = "ElementID")
    )
    Collection<KoiElement> element;
}
