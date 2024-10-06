package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingTankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.ConsultingService;
import lombok.AccessLevel;
import lombok.Builder;
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

    @GetMapping("/koiFish/{userID}")
    public ApiResponse<List<ConsultingFishResponse>> getKoiFishByElement(@PathVariable String userID) {
        return ApiResponse.<List<ConsultingFishResponse>>
                builder().result(consultingService.koiFishList(userID)).build();
    }

    @GetMapping("/tank/{userID}")
    public ApiResponse<List<ConsultingTankResponse>> getTankByElement(@PathVariable String userID){
        return ApiResponse.<List<ConsultingTankResponse>>
                builder().result(consultingService.tankList(userID)).build();
    }

    @GetMapping("/all/{userID}")
    public ApiResponse<ConsultingResponse> getConsulting(@PathVariable String userID){
        var koiFishList = consultingService.koiFishList(userID);
        var tankList = consultingService.tankList(userID);
        ConsultingResponse consultingResponse = ConsultingResponse.builder()
                .koiFishList(koiFishList)
                .tankList(tankList)
                .build();
        return ApiResponse.<ConsultingResponse>builder()
                .result(consultingResponse).build();
    }
}
