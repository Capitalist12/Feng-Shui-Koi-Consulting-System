package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.VerifyAdRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Ads_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.AdvertisementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.AdvertisementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.CategoryRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    UserRepository userRepository;

    public AdvertisementResponse createAdvertisement(AdvertisementCreationRequest request) {
        Advertisement ad = advertisementMapper.toAdvertisement(request, elementRepo, categoryService);
        User user = userRepository.findByUsername(userService.getMyInfo().getUsername())
                .orElseThrow(() -> new AppException((ErrorCode.USER_NOT_EXIST)));
        ad.setUser(user);
        ad.setAdID(generateAdID());
        ad.setStatus("Pending");

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

//    public List<AdvertisementResponse> getListAdvertisements(){
//        return advertisementRepo.findAll().stream()
//                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
//    }

    public List<AdvertisementResponse> getListAdvertisements(){
        return advertisementRepo.findAds().stream()
                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
    }

    public List<AdvertisementResponse> getAdvertisementByFilter(String categoryName, String username, String elementName){
        return advertisementRepo.filterAdvertisements(categoryName, username, elementName).stream()
                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
    }

    public AdvertisementResponse verifyAd(VerifyAdRequest request){
        Advertisement advertisement = advertisementRepo.findById(request.getAdID())
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisement.setStatus(request.getNewStatus());
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    public AdvertisementResponse updateAdvertisement(String adID, AdvertisementUpdateRequest request){
        Advertisement advertisement = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementMapper
                .updateAdvertisement(advertisement, request, elementRepo, categoryService);
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    public void deleteAdvertisement(String adID){
        Advertisement advertisement = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementRepo.delete(advertisement);
    }

    public String generateAdID(){
        return "AD" + String.format("%05d", System.nanoTime() % 100000);
    }

    public String generateImage_Ads(){
        return "A" + String.format("%05d", System.nanoTime() % 100000);
    }
}
