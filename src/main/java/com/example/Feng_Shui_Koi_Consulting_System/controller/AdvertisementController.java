package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FindAdByFilterRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
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
                .result(advertisementService.getListAdvertisements())
                .build();
    }

//    @GetMapping("/category/{categoryName}")
//    ApiResponse<List<AdvertisementResponse>> getAdByCategory(@PathVariable("categoryName") String categoryName){
//        return ApiResponse.<List<AdvertisementResponse>>builder()
//                .result(advertisementService.getAdvertisementByCategory(categoryName))
//                .build();
//    }
//
//    @GetMapping("/user/{username}")
//    ApiResponse<List<AdvertisementResponse>> getAdByUser(@PathVariable("username") String username){
//        return ApiResponse.<List<AdvertisementResponse>>builder()
//                .result(advertisementService.getAdvertisementByUser(username))
//                .build();
//    }
//
//    @GetMapping("/element/{elementName}")
//    ApiResponse<List<AdvertisementResponse>> getAdByElement(@PathVariable("elementName") String elementName){
//        return ApiResponse.<List<AdvertisementResponse>>builder()
//                .result(advertisementService.getAdvertisementByElement(elementName))
//                .build();
//    }

    @PostMapping("/filter")
    ApiResponse<List<AdvertisementResponse>> getAdByFilter(@RequestBody FindAdByFilterRequest request){
        return ApiResponse.<List<AdvertisementResponse>>builder()
                .result(advertisementService.getAdvertisementByFilter(
                        request.getCategoryName(),
                        request.getUsername(),
                        request.getElementName()))
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
