package com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CategoryResponse {
    String categoryID;
    String categoryName;
}
