package com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement;

import com.example.Feng_Shui_Koi_Consulting_System.dto.user.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Ads_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
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
    Set<Ads_Image> imagesAd;
    String status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    LocalDateTime createdDate;
}
