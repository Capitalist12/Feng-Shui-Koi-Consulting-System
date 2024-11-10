package com.example.Feng_Shui_Koi_Consulting_System.dto.blog;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BlogRequest {
    @NotBlank(message = "TITLE_NOT_EMPTY")
    String title;
    String imageURL;
    String description;
}
