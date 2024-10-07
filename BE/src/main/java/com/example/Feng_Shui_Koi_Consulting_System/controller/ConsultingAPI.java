package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CalculateElementRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingTankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.ConsultingService;
import com.example.Feng_Shui_Koi_Consulting_System.service.ElementCalculationService;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ConsultingAPI {

    ElementCalculationService elementCalculationService;
    ConsultingService consultingService;

    @GetMapping("/calculate")
    public ApiResponse<Integer> calculateElementId(@RequestBody CalculateElementRequest request) {
        int elementId = elementCalculationService.calculateElementId(request.getDob());
        return ApiResponse.<Integer>builder()
                .result(elementId)
                .build();
    }

//    @PostMapping("/compatibility")
//    ApiResponse<CompatibilityResponse> calculateCompatibilityScore
//            (@RequestBody CompatibilityRequest request) {
//        String userElement = request.getUserElement();
//        String tankElement = consultingService.elementFromShape(request.getTankShape());
//        Set<Set<String>> fishElements = request.getKoiFishColors().stream()
//                .map(colors -> colors.stream()
//                        .map(consultingService::elementFromColor)
//                        .collect(Collectors.toSet()))
//                .collect(Collectors.toSet());
//        return ApiResponse.<CompatibilityResponse>builder()
//                .result(consultingService.compatibilityScore(userElement,
//                        tankElement, fishElements, request))
//                .build();
//    }

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
