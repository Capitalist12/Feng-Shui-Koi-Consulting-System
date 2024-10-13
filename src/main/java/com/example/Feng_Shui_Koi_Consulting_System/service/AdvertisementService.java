package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Ads_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.AdvertisementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.AdvertisementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;



@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AdvertisementService {

    AdvertisementRepo advertisementRepo;
    AdvertisementMapper advertisementMapper;
    CategoryService categoryService;
    UserService userService;
    ElementRepo elementRepo;

    public AdvertisementResponse createAdvertisement(AdvertisementCreationRequest request) {
        Advertisement ad = advertisementMapper.toAdvertisement(request, elementRepo, categoryService, userService);
        ad.setAdID(generateAdID());

        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            Set<Ads_Image> imagesAd = request.getImagesURL().stream()
                    .map(imageUrl -> {
                        Ads_Image adsImage = new Ads_Image();
                        adsImage.setAdImageId(generateImage_Ads());
                        adsImage.setImageURL(imageUrl);
                        adsImage.setAdvertisement(ad); // Set the association to the advertisement
                        return adsImage;
                    })
                    .collect(Collectors.toSet());
            ad.setImagesAd(imagesAd);
        }
        return  advertisementMapper.toAdvertisementResponse(advertisementRepo.save(ad));
    }

    public List<AdvertisementResponse> getListAdvertisements(){
        return advertisementRepo.findAll().stream()
                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
    }

//    public List<AdvertisementResponse> getAdvertisementByCategory(String categoryID){
//        return advertisementRepo.findByCategoryID(categoryID).stream()
//                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
//    }

    public AdvertisementResponse updateAdvertisement(String adID, AdvertisementUpdateRequest request){
        Advertisement ad = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementMapper.updateAdvertisement(ad, request, elementRepo, categoryService, userService);

        if(request.getImagesURL() != null && !request.getImagesURL().isEmpty()){
            Set<String> newImageURLs = new HashSet<>(request.getImagesURL());
            Set<Ads_Image> existingImages = ad.getImagesAd();

            existingImages.removeIf(image -> !newImageURLs.contains(image.getImageURL()));

            newImageURLs.forEach(imageUrl -> {
                boolean exists = existingImages.stream()
                        .anyMatch(existingImage -> existingImage.getImageURL().equals(imageUrl));
                if (!exists) {
                    // Create new image entity
                    Ads_Image adsImage = new Ads_Image();
                    adsImage.setAdImageId(generateImage_Ads());  // You may want to ensure this generates unique IDs
                    adsImage.setImageURL(imageUrl);
                    adsImage.setAdvertisement(ad);  // Maintain bidirectional relationship
                    // Add new image to existing images
                    existingImages.add(adsImage);
                }
            });
            ad.setImagesAd(existingImages);
        }

        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(ad));
    }

    public void deleteAdvertisement(String adID){
        Advertisement ad = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementRepo.delete(ad);
    }

    public String generateAdID(){
        return "AD" + String.format("%05d", System.nanoTime() % 100000);
    }

    public String generateImage_Ads(){
        return "A" + String.format("%05d", System.nanoTime() % 100000);
    }
}