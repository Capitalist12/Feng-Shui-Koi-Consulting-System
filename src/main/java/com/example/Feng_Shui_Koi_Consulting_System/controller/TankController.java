package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.services.FishService;
import com.example.Feng_Shui_Koi_Consulting_System.services.TankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tank")
public class TankController {
    @Autowired
    private TankService tankService;

    @PostMapping
    Tank createTank(@RequestBody TankCreationRequest request){
        return tankService.createTank(request);
    }

    @GetMapping
    List<Tank> getTank(){
        return tankService.getTank();
    }

    @GetMapping("/{tankId}")
    Tank getFish(@PathVariable("tankId") String tankId){
        return tankService.getTank(tankId);
    }

    @PutMapping("/{tankId}")
    Tank updateFish(@PathVariable String tankId ,@RequestBody TankUpdateRequest request){
        return tankService.updateTank(tankId, request);
    }

    @DeleteMapping("/{tankId}")
    String deleteTank(@PathVariable String tankId){
        tankService.deleteFish(tankId);
        return "Tank has been delete";
    }
}
