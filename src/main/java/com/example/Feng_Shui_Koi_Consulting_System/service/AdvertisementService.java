package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.VerifyAdRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Ads_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.AdvertisementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.AdvertisementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
        ad.setCreatedDate(LocalDateTime.now());
    // Get advertisement's images
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
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(ad));
    }

    //Get list of all advertisement
    public List<AdvertisementResponse> getAllAdvertisements() {
        return advertisementRepo.findAll().stream()
                .map(advertisementMapper::toAdvertisementResponse).collect(Collectors.toList());
    }

    //Get list of advertisement that have the id require
    public List<AdvertisementResponse> getAdByID(String adID) {
        return advertisementRepo.findById(adID).stream()
                .map(advertisementMapper::toAdvertisementResponse).collect(Collectors.toList());
    }

    //Get list of verified ads
    public List<AdvertisementResponse> getListAdvertisements() {
        return advertisementRepo.findAdsVerified().stream()
                .map(advertisementMapper::toAdvertisementResponse).collect(Collectors.toList());
    }

    //Get list of pending ads
    public List<AdvertisementResponse> getListAdvertisementsPending() {
        return advertisementRepo.findAdsPending().stream()
                .map(advertisementMapper::toAdvertisementResponse).collect(Collectors.toList());
    }

    //Get list of rejected ads
    public List<AdvertisementResponse> getListAdvertisementsRejected() {
        return advertisementRepo.findAdsRejected().stream()
                .map(advertisementMapper::toAdvertisementResponse).collect(Collectors.toList());
    }

    //Get list by filter like category, username and element
    public List<AdvertisementResponse> getAdvertisementByFilter(String categoryName, String username, String elementName) {
        return advertisementRepo.filterAdvertisements(categoryName, username, elementName).stream()
                .map(advertisementMapper::toAdvertisementResponse).collect(Collectors.toList());
    }

    //Let admin verify if the pending ads
    public AdvertisementResponse verifyAd(VerifyAdRequest request) {
        Advertisement advertisement = advertisementRepo.findById(request.getAdID())
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        if (!request.getNewStatus().equals("Verified") && !request.getNewStatus().equals("Rejected")) {
            throw new AppException(ErrorCode.STATUS_INVALID);
        }
        advertisement.setStatus(request.getNewStatus());
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    //Scheduling the auto delete rejected ads that created for 2 mins
    @Scheduled(cron = "0 */2 * * * *")  // Run every 2 minutes
    public void deleteOldRejectedAdvertisements() {
        // Get the timestamp of 2 minutes ago
        LocalDateTime twoMinutesAgo = LocalDateTime.now().minusMinutes(2);

        // Retrieve rejected advertisements older than 2 minutes
        List<Advertisement> oldRejectedAds = advertisementRepo.findRejectedAdvertisementsOlderThan2Mins(twoMinutesAgo);

        // Delete all old rejected ads from the database
        advertisementRepo.deleteAll(oldRejectedAds);
    }

//    @Scheduled(cron = "0 0 0 */7 * *")
//    public void deleteOldRejectedAdvertisements() {
//        LocalDateTime sevenDaysAgo = LocalDateTime.now().minusDays(7);
//
//        List<Advertisement> oldRejectedAds = advertisementRepo.findRejectedAdvertisementsOlderThan7Days(sevenDaysAgo);
//
//        advertisementRepo.deleteAll(oldRejectedAds);
//    }

    //Let user update advertisement
    public AdvertisementResponse updateAdvertisement(String adID, AdvertisementUpdateRequest request) {
        Advertisement advertisement = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementMapper
                .updateAdvertisement(advertisement, request, elementRepo, categoryService);
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    public void deleteAdvertisement(String adID) {
        Advertisement advertisement = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementRepo.delete(advertisement);
    }

    public String generateAdID() {
        return "AD" + String.format("%05d", System.nanoTime() % 100000);
    }

    public String generateImage_Ads() {
        return "A" + String.format("%05d", System.nanoTime() % 100000);
    }
}
