package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiFishRespon;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.service.FishService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/fish")
public class FishController {

     FishService fishService;

    @PostMapping
    ApiResponse<KoiFishRespon> createFish(@RequestBody FishCreationRequest request){
        return ApiResponse.<KoiFishRespon>builder()
                .result(fishService.createFish(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<KoiFishRespon>> getFish(){
        return ApiResponse.<List<KoiFishRespon>>builder()
                .result(fishService.getFish())
                .build();
    }

    @GetMapping("/{fishId}")
    ApiResponse<KoiFishRespon> getFishByID(@PathVariable("fishId") String fishId){
        return ApiResponse.<KoiFishRespon>builder()
                .result(fishService.getFishById(fishId))
                .build();
    }

    @PutMapping("/{fishId}")
    ApiResponse<KoiFishRespon> updateFish(@PathVariable String fishId ,@RequestBody FishUpdateRequest request){
        return ApiResponse.<KoiFishRespon>builder()
                .result(fishService.updateFish(fishId, request))
                .build();
    }

    @DeleteMapping("/{fishId}")
    String deleteFish(@PathVariable String fishId){
        fishService.deleteFish(fishId);
        return "Fish has been delete";
    }
}
