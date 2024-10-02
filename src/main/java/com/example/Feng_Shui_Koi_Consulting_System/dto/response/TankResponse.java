package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TankResponse {
    String tankId;
    String shape;
    String imageURL;
    ElementResponse elementTank;
}
