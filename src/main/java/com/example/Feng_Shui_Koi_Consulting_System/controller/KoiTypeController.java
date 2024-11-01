package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KTResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.KoiTypeService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/koiType")
public class KoiTypeController {

    KoiTypeService koiTypeService;

    @PostMapping
    ApiResponse<KTResponse> createKoiType(@Valid @RequestBody KoiTypeRequest request){
        return ApiResponse.<KTResponse>builder()
                .result(koiTypeService.createKoiType(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<KTResponse>>getKoiType(){
        return ApiResponse.<List<KTResponse>>builder()
                .result(koiTypeService.getKoiTypes())
                .build();
    }

    @PutMapping("/{koiTypeId}")
    ApiResponse<KTResponse> updateKoiType(@PathVariable String koiTypeId, @Valid @RequestBody KoiTypeRequest request){
        return ApiResponse.<KTResponse>builder()
                .result(koiTypeService.updateKoiType(koiTypeId, request))
                .build();
    }


    @DeleteMapping("/{koiTypeId}")
    String deleteUser(@PathVariable String koiTypeId){
        koiTypeService.deleteKoiType(koiTypeId);
        return "KoiType has been Deleted!";
    }

}
