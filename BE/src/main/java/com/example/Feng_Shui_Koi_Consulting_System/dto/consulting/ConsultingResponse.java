package com.example.Feng_Shui_Koi_Consulting_System.dto.consulting;

import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementResponse;
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
    List<ConsultingAdResponse> adList;
}
