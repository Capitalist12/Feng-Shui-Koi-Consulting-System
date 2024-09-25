package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiTypesResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.KoiTypeService;
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
    ApiResponse<KoiTypesResponse> createKoiType(@RequestBody KoiTypeRequest request){
        return ApiResponse.<KoiTypesResponse>builder()
                .result(koiTypeService.createKoiType(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<KoiTypesResponse>>getKoiType(){
        return ApiResponse.<List<KoiTypesResponse>>builder()
                .result(koiTypeService.getKoiTypes())
                .build();
    }



    @DeleteMapping("/{KoiTypeId}")
    String deleteUser(@PathVariable String KoiTypeId){
        koiTypeService.deleteKoiType(KoiTypeId);
        return "KoiType has been Deleted!";
    }

}
