package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.*;
import com.example.Feng_Shui_Koi_Consulting_System.service.AdvertisementService;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/ad")
public class AdvertisementController {
    AdvertisementService advertisementService;

    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
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

    @GetMapping("/verified")
    ApiResponse<List<AdvertisementResponse>> getAds(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisements())
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/pending")
    ApiResponse<List<AdvertisementResponse>> getAdsPending(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisementsPending())
                .build();
    }

    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    @GetMapping("/rejected")
    ApiResponse<List<AdvertisementResponse>> getAdsRejected(){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getListAdvertisementsRejected())
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

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/updateAdStatus")
    ApiResponse<AdvertisementResponse> updateAdStatus(@RequestBody VerifyAdRequest request){
        return ApiResponse.<AdvertisementResponse>builder()
                .result(advertisementService.verifyAd(request))
                .build();
    }

    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    @PutMapping("/{adID}")
    ApiResponse<AdvertisementResponse> updateAd(@PathVariable String adID, @RequestBody AdvertisementUpdateRequest request){
        return ApiResponse.<AdvertisementResponse>builder()
                .result(advertisementService.updateAdvertisement(adID, request))
                .build();
    }

    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    @DeleteMapping("/{adID}")
    String deleteAd(@PathVariable String adID){
        advertisementService.deleteAdvertisement(adID);
        return "Advertisement has been deleted";
    }
}
