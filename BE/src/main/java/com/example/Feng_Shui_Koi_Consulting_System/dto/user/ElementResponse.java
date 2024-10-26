package com.example.Feng_Shui_Koi_Consulting_System.dto.user;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ElementResponse {
    Integer elementId;
    String elementName;
    String description;
    String quantity;
    String direction;
    int value;
    String color;
    String generation;
    String inhibition;
}
