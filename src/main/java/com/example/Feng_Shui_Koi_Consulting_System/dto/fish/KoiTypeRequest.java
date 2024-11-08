package com.example.Feng_Shui_Koi_Consulting_System.dto.fish;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KoiTypeRequest {
    @Size(min = 1, max = 40, message = "KOI_INVALID")
    @Pattern(regexp = "^[^~!@#$%^&*()_+={}\\[\\]:;\"'<>,.?/\\d]+$", message = "NAME_INVALID")
    String typeName;
    String description;
}
