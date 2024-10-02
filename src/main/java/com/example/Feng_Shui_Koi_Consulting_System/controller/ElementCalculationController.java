package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.ElementCalculationService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/element")
public class ElementCalculationController {

    ElementCalculationService elementCalculationService;

    @GetMapping("/calculate")
    public ApiResponse<Integer> calculateElementId(@RequestParam int birthYear) {
        int elementId = elementCalculationService.calculateElementId(birthYear);
        return ApiResponse.<Integer>builder()
                .result(elementId)
                .build();
    }
}
