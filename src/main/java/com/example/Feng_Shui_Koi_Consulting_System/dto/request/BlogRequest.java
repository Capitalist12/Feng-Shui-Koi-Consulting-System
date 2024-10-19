package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BlogRequest {
    String title;
    String imageURL;
    String description;
}
