package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.ElementCalculationService;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CompatibilityRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.CompatibilityResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.CompatibilityService;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
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
    CompatibilityService compatibilityService;

    @GetMapping("/calculate")
    public ApiResponse<Integer> calculateElementId(@RequestParam int birthYear) {
        int elementId = elementCalculationService.calculateElementId(birthYear);
        return ApiResponse.<Integer>builder()
                .result(elementId)
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

}
