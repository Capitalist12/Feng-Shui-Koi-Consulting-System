package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.services.FishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fish")
public class FishController {
    @Autowired
    private FishService fishService;

    @PostMapping
    KoiFish createFish(@RequestBody FishCreationRequest request){
        return fishService.createFish(request);
    }

    @GetMapping
    List<KoiFish> getFish(){
        return fishService.getFish();
    }

    @GetMapping("/{fishId}")
    KoiFish getFish(@PathVariable("fishId") String fishId){
        return fishService.getFish(fishId);
    }

    @PutMapping("/{fishId}")
    KoiFish updateFish(@PathVariable String fishId ,@RequestBody FishUpdateRequest request){
        return fishService.updateFish(fishId, request);
    }

    @DeleteMapping("/{fishId}")
    String deleteFish(@PathVariable String fishId){
        fishService.deleteFish(fishId);
        return "Fish has been delete";
    }
}
