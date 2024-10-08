package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CalculateElementRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ConsultingRequest;
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

import java.time.LocalDate;
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

    @GetMapping("/all")
    public ApiResponse<ConsultingResponse> getConsulting(@RequestBody ConsultingRequest request){
        var koiFishList = consultingService.koiFishList(request);
        var tankList = consultingService.tankList(request);
        ConsultingResponse consultingResponse = ConsultingResponse.builder()
                .koiFishList(koiFishList)
                .tankList(tankList)
                .build();
        return ApiResponse.<ConsultingResponse>builder()
                .result(consultingResponse).build();
    }
}
