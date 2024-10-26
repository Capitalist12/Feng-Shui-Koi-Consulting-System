package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.TankService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tank")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TankController {
     TankService tankService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    ApiResponse<TankResponse> createTank(@RequestBody TankCreationRequest request){
        return ApiResponse.<TankResponse>builder()
                .result(tankService.createTank(request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    ApiResponse<List<TankResponse>> getTank(){
        return ApiResponse.<List<TankResponse>>builder()
                .result(tankService.getTank())
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{tankId}")
    ApiResponse<TankResponse> getTank(@PathVariable("tankId") String tankId){
        return ApiResponse.<TankResponse>builder()
                .result(tankService.getTankByID(tankId))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{tankId}")
    ApiResponse<TankResponse> updateFish(@PathVariable String tankId ,@RequestBody TankUpdateRequest request){
        return ApiResponse.<TankResponse>builder()
                .result(tankService.updateTank(tankId, request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{tankId}")
    String deleteTank(@PathVariable String tankId){
        tankService.deleteTank(tankId);
        return "Tank has been delete";
    }
}
