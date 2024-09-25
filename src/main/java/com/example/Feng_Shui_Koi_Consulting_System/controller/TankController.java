package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.service.TankService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tank")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TankController {
     TankService tankService;

    @PostMapping
    ApiResponse<TankResponse> createTank(@RequestBody TankCreationRequest request){
        return ApiResponse.<TankResponse>builder()
                .result(tankService.createTank(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<TankResponse>> getTank(){
        return ApiResponse.<List<TankResponse>>builder()
                .result(tankService.getTank())
                .build();
    }

    @GetMapping("/{tankId}")
    Tank getFish(@PathVariable("tankId") String tankId){
        return tankService.getTank(tankId);
    }

    @PutMapping("/{tankId}")
    ApiResponse<TankResponse> updateFish(@PathVariable String tankId ,@RequestBody TankUpdateRequest request){
        return ApiResponse.<TankResponse>builder()
                .result(tankService.updateTank(tankId, request))
                .build();
    }

    @DeleteMapping("/{tankId}")
    String deleteTank(@PathVariable String tankId){
        tankService.deleteFish(tankId);
        return "Tank has been delete";
    }
}
