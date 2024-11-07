package com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdvertisementUpdateRequest {
    String title;
    String description;
    Float price;
    String element;
    String categoryName;
    Set<String> imagesURL;
}