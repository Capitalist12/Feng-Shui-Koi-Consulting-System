package com.example.Feng_Shui_Koi_Consulting_System.dto.consulting;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ConsultingResponse {
    List<ConsultingFishResponse> koiFishList;
    List<ConsultingTankResponse> tankList;
}
