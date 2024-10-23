package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CalculateElementRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CompatibilityRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ConsultingRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.CompatibilityResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ConsultingResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.ChatGptService;
import com.example.Feng_Shui_Koi_Consulting_System.service.CompatibilityService;
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
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ConsultingAPI {

    ElementCalculationService elementCalculationService;
    ConsultingService consultingService;
    CompatibilityService compatibilityService;

    @PostMapping("/calculate")
    public ApiResponse<String> calculateElementName(@RequestBody CalculateElementRequest request) {
        String elementName = elementCalculationService.calculateElementName(request.getDob());
        return ApiResponse.<String>builder()
                .result(elementName)
                .build();
    }

    @PostMapping("/compatibility")
    ApiResponse<CompatibilityResponse> calculateCompatibilityScore
            (@RequestBody CompatibilityRequest request) {
        String userElement = request.getUserElement();
        String tankElement = compatibilityService.elementFromShape(request.getTankShape());
        Set<Set<String>> fishElements = request.getKoiFishColors().stream()
                .map(colors -> colors.stream()
                        .map(compatibilityService::elementFromColor)
                        .collect(Collectors.toSet()))
                .collect(Collectors.toSet());
        return ApiResponse.<CompatibilityResponse>builder()
                .result(compatibilityService.compatibilityScore(userElement,
                        tankElement, fishElements, request))
                .build();
    }

    @PostMapping("/consulting")
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
