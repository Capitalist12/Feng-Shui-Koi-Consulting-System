package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingTankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.ConsultingService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/consult")
public class ConsultingAPI {

    ConsultingService consultingService;

    @GetMapping("/koiFish/{elementID}")
    public ApiResponse<List<ConsultingFishResponse>> getKoiFishByElement(@PathVariable Integer elementID) {
        return ApiResponse.<List<ConsultingFishResponse>>
                builder().result(consultingService.koiFishList(elementID)).build();
    }

    @GetMapping("/tank/{elementID}")
    public ApiResponse<List<ConsultingTankResponse>> getTankByElement(@PathVariable Integer elementID){
        return ApiResponse.<List<ConsultingTankResponse>>
                builder().result(consultingService.tankList(elementID)).build();
    }
}
