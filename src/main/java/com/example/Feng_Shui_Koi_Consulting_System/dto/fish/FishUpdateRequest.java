package com.example.Feng_Shui_Koi_Consulting_System.dto.fish;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FishUpdateRequest {
    @Size(min = 4, max = 40, message = "KOI_INVALID")
    @Pattern(regexp = "^[^~!@#$%^&*()_+={}\\[\\]:;\"'<>,.?/\\d]+$", message = "NAME_INVALID")
    String name;
    String size;
    String weight;
    @Pattern(regexp = "^[^~!@#$%^&*()_+={}\\[\\]:;\"'<>.?/\\d]+$", message = "NAME_INVALID")
    String color;
    String description;
    Set<String> imagesURL;
    String koiTypeName;
    Set<String> elements;
}
