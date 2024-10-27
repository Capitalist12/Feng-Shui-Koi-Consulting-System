package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.*;
import com.example.Feng_Shui_Koi_Consulting_System.service.AdvertisementService;
import lombok.*;
import lombok.experimental.FieldDefaults;
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
                .result(advertisementService.getAllAdvertisements())
                .build();
    }

    @GetMapping("/{adID}")
    ApiResponse<List<AdvertisementResponse>> getAdByID(@PathVariable String adID){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getAdByID(adID))
                .build();
    }

    @GetMapping("/get-my-ads")
    ApiResponse<List<AdvertisementResponse>> getAdsOfUser(){
        return  ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getAdByUser())
                .build();
    }

    @GetMapping("/verified")
    ApiResponse<List<AdvertisementResponse>> getAds(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisements())
                .build();
    }

    @GetMapping("/pending")
    ApiResponse<List<AdvertisementResponse>> getAdsPending(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisementsPending())
                .build();
    }

    @GetMapping("/rejected-all")
    ApiResponse<List<AdvertisementResponse>> getAdsRejected(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisementsRejected())
                .build();
    }

    @GetMapping("/rejected")
    ApiResponse<List<AdvertisementResponse>> getAdsRejectedOfUser(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisementsRejectedOfUser())
                .build();
    }

    @PostMapping("/filter")
    ApiResponse<List<AdvertisementResponse>> getAdByFilter(@RequestBody FindAdByFilterRequest request){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getAdvertisementByFilter(
                        request.getCategoryName(),
                        request.getUsername(),
                        request.getElementName()))
                .build();
    }

    @PostMapping("/updateAdStatus")
    ApiResponse<AdvertisementResponse> updateAdStatus(@RequestBody VerifyAdRequest request){
        return ApiResponse.<AdvertisementResponse>builder()
                .result(advertisementService.verifyAd(request))
                .build();
    }


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
