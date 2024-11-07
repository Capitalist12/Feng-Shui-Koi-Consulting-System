package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.consulting.CalculateElementRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.compatibility.CompatibilityRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.consulting.ConsultingRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.compatibility.CompatibilityResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.consulting.ConsultingResponse;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.service.CompatibilityService;
import com.example.Feng_Shui_Koi_Consulting_System.service.ConsultingService;
import com.example.Feng_Shui_Koi_Consulting_System.service.ElementCalculationService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
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

    //Calculate user's element
    @PreAuthorize("hasAnyRole('USER', 'MEMBER', 'ADMIN')")
    @PostMapping("/calculate")
    public ApiResponse<String> calculateElementName(@RequestBody  CalculateElementRequest request) {
        String elementName = elementCalculationService.calculateElementName(request.getDob());
        return ApiResponse.<String>builder()
                .result(elementName)
                .build();
    }

    //Calculate the compatibility between you and your koi fishes and tank
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    @PostMapping("/compatibility")
    ApiResponse<CompatibilityResponse> calculateCompatibilityScore
            (@RequestBody CompatibilityRequest request) {
        if(request.getUserElement().isEmpty()) throw new AppException(ErrorCode.INVALID_REQUEST);
        String tankElement = compatibilityService.elementFromShape(request.getTankShape());
        if(request.getKoiFishColors().isEmpty() || request.getKoiFishColors().stream().anyMatch(Set :: isEmpty)) throw new AppException(ErrorCode.INVALID_REQUEST);
        Set<Set<String>> fishElements = request.getKoiFishColors().stream()
                .map(colors -> colors.stream()
                        .map(compatibilityService::elementFromColor)
                        .collect(Collectors.toSet()))
                .collect(Collectors.toSet());
        return ApiResponse.<CompatibilityResponse>builder()
                .result(compatibilityService.compatibilityScore(request.getUserElement(),
                        tankElement, fishElements, request))
                .build();
    }

    //Consulting koi fishes and tank
    @PreAuthorize("hasAnyRole('USER', 'MEMBER', 'ADMIN')")
    @PostMapping("/consulting")
    public ApiResponse<ConsultingResponse> getConsulting(@RequestBody ConsultingRequest request){
        var koiFishList = consultingService.koiFishList(request);
        var tankList = consultingService.tankList(request);
        var adList = consultingService.adList(request);
        ConsultingResponse consultingResponse = ConsultingResponse.builder()
                .koiFishList(koiFishList)
                .tankList(tankList)
                .adList(adList)
                .build();
        return ApiResponse.<ConsultingResponse>builder()
                .result(consultingResponse).build();
    }
}