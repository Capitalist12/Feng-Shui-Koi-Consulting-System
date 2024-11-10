package com.example.Feng_Shui_Koi_Consulting_System.dto.tank;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TankUpdateRequest {
    @Size(min = 4, max = 70, message = "TANK_INVALID")
    @Pattern(regexp = "^[^~!@#$%^&*()_+={}\\[\\]:;\"'<>,.?/\\d]+$", message = "NAME_INVALID")
    String shape;
    @Size(min = 1, max = 12, message = "ELEMENT_INVALID")
    String element;
    String imageURL;
}
