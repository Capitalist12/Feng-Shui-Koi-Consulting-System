package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KTResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.KoiTypeService;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    ApiResponse<KTResponse> createKoiType(@RequestBody KoiTypeRequest request){
        return ApiResponse.<KTResponse>builder()
                .result(koiTypeService.createKoiType(request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    ApiResponse<List<KTResponse>>getKoiType(){
        return ApiResponse.<List<KTResponse>>builder()
                .result(koiTypeService.getKoiTypes())
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{koiTypeId}")
    ApiResponse<KTResponse> updateKoiType(@PathVariable String koiTypeId, @RequestBody KoiTypeRequest request){
        return ApiResponse.<KTResponse>builder()
                .result(koiTypeService.updateKoiType(koiTypeId, request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{koiTypeId}")
    String deleteUser(@PathVariable String koiTypeId){
        koiTypeService.deleteKoiType(koiTypeId);
        return "KoiType has been Deleted!";
    }

}
