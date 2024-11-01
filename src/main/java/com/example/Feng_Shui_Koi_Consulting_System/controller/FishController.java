package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KoiFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.FishService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/fish")
public class FishController {

     FishService fishService;

    @PostMapping
    ApiResponse<KoiFishResponse> createFish(@Valid @RequestBody FishCreationRequest request){
        return ApiResponse.<KoiFishResponse>builder()
                .result(fishService.createFish(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<KoiFishResponse>> getFish(){
        return ApiResponse.<List<KoiFishResponse>>builder()
                .result(fishService.getFish())
                .build();
    }

    @GetMapping("/{fishId}")
    ApiResponse<KoiFishResponse> getFishByID(@PathVariable("fishId") String fishId){
        return ApiResponse.<KoiFishResponse>builder()
                .result(fishService.getFishById(fishId))
                .build();
    }

    @PutMapping("/{fishId}")
    ApiResponse<KoiFishResponse> updateFish(@PathVariable String fishId , @Valid @RequestBody FishUpdateRequest request){
        return ApiResponse.<KoiFishResponse>builder()
                .result(fishService.updateFish(fishId, request))
                .build();
    }

    @DeleteMapping("/{fishId}")
    String deleteFish(@PathVariable String fishId){
        fishService.deleteFish(fishId);
        return "Fish has been delete";
    }
}
