package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.AdvertisementService;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/ad")
public class AdvertisementController {
    AdvertisementService advertisementService;

    @PostMapping
    ApiResponse<AdvertisementResponse> createAd(@RequestBody AdvertisementCreationRequest request){
        return ApiResponse.<AdvertisementResponse>builder()
                .result(advertisementService.createAdvertisement(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<AdvertisementResponse>> getAllAds(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisements())
                .build();
    }

//    @GetMapping("/category/{categoryID}")
//    ApiResponse<List<AdvertisementResponse>> getAdByCategory(@PathVariable("categoryID") String categoryID){
//        return ApiResponse.<List<AdvertisementResponse>>builder()
//                .result(advertisementService.getAdvertisementByCategory(categoryID))
//                .build();
//    }

//    @GetMapping("/user/{userID}")
//    ApiResponse<List<AdvertisementResponse>> getAdByUser(@PathVariable("userID") String userID){
//        return ApiResponse.<List<AdvertisementResponse>>builder()
//                .result(advertisementService.getAdvertisementByUserID(userID))
//                .build();
//    }

    @PutMapping("/{adID}")
    ApiResponse<AdvertisementResponse> updateAd(@PathVariable String adID, @RequestBody AdvertisementUpdateRequest request){
        return ApiResponse.<AdvertisementResponse>builder()
                .result(advertisementService.updateAdvertisement(adID, request))
                .build();
    }

    @DeleteMapping("/{adID}")
    String deleteAd(@PathVariable String adID){
        advertisementService.deleteAdvertisement(adID);
        return "Advertisement has been deleted";
    }
}
