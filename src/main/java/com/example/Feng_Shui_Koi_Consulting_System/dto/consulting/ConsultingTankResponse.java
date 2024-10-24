package com.example.Feng_Shui_Koi_Consulting_System.dto.consulting;

import com.example.Feng_Shui_Koi_Consulting_System.dto.user.ElementResponse;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ConsultingTankResponse {
    String tankId;
    String shape;
    String imageURL;
    ElementResponse elementTank;
}