package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiType;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/type")
public class TypeController {
    @Autowired
    private TypeService typeService;

    @PostMapping
    KoiType createType(@RequestBody KoiTypeCreationRequest request){
        return typeService.createkoiType(request);
    }

    @GetMapping
    List<KoiType> getType(){
        return typeService.getKoiType();
    }

    @GetMapping("/{koiTypeId}")
    KoiType getFish(@PathVariable("koiTypeId") String koiTypeId){
        return typeService.getkoiType(koiTypeId);
    }

    @PutMapping("/{koiTypeId}")
    KoiType updateFish(@PathVariable String koiTypeId ,@RequestBody KoiTypeUpdateRequest request){
        return typeService.updatekoiType(koiTypeId, request);
    }

    @DeleteMapping("/{koiTypeId}")
    String deleteType(@PathVariable String koiTypeId){
        typeService.deleteType(koiTypeId);
        return "Tank has been delete";
    }
}
