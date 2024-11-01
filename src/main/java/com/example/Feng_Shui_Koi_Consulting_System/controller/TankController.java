package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.TankService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tank")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TankController {
     TankService tankService;

    @PostMapping
    ApiResponse<TankResponse> createTank(@Valid @RequestBody TankCreationRequest request){
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
    ApiResponse<TankResponse> getTank(@PathVariable("tankId") String tankId){
        return ApiResponse.<TankResponse>builder()
                .result(tankService.getTankByID(tankId))
                .build();
    }

    @PutMapping("/{tankId}")
    ApiResponse<TankResponse> updateTank(@PathVariable String tankId , @Valid @RequestBody TankUpdateRequest request){
        return ApiResponse.<TankResponse>builder()
                .result(tankService.updateTank(tankId, request))
                .build();
    }

    @DeleteMapping("/{tankId}")
    String deleteTank(@PathVariable String tankId){
        tankService.deleteTank(tankId);
        return "Tank has been delete";
    }
}
