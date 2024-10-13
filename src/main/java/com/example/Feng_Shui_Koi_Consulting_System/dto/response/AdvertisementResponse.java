package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdvertisementResponse {
    String adID;
    String title;
    String description;
    Float price;
    String element;
    CategoryResponse category;
    UserResponse user;
    Set<String> imagesURL;
}
