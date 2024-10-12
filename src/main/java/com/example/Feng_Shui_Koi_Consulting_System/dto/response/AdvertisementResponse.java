package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdvertisementResponse {
    String adID;
    String title;
    String description;
    Float price;
    ElementResponse element;
    CategoryResponse category;
    UserResponse user;
    String adImageID;
}
