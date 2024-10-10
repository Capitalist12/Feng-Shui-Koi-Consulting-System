package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
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
    int elementID;
    String categoryID;
    String userID;
    String adImageID;
}
