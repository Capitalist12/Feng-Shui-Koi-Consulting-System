package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Koi_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiTypes;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KoiFishRespon {
    String id;
    String name;
    String size;
    String weight;
    String color;
    String description;
    KoiTypesResponse koiTypes;
    Set<Koi_Image> imagesFish;
    Set<ElementResponse> elements;

}
