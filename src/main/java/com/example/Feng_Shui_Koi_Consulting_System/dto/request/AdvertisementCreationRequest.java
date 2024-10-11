package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdvertisementCreationRequest {
    String title;
    String description;
    Float price;
    Integer elementID;
    String categoryID;
    String userID;
    String adImageID;
}
