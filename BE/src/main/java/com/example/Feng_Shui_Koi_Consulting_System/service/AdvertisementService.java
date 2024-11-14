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

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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

    //Constant for generating AdID
    private static final String ID_PREFIX = "AD";
    private final SecureRandom secureRandom = new SecureRandom();

    public AdvertisementResponse createAdvertisement(AdvertisementCreationRequest request) {
        Advertisement ad = advertisementMapper.toAdvertisement(request, elementRepo, categoryService);
        User user = userRepository.findByUsername(userService.getMyInfo().getUsername())
                .orElseThrow(() -> new AppException((ErrorCode.USER_NOT_EXIST)));
        ad.setUser(user);
        String adID;
        do{
            adID = generateAdID();
        }while(advertisementRepo.existsByAdID(adID));
        ad.setAdID(adID);
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

    //Get list of advertisements that have the id require
    public List<AdvertisementResponse> getAdByID(String adID) {
        return advertisementRepo.findById(adID).stream()
                .map(advertisementMapper::toAdvertisementResponse).collect(Collectors.toList());
    }

    //Get list of advertisements of user
    public List<AdvertisementResponse> getAdByUser() {
        String userID = userService.getMyInfo().getUserID();
        return advertisementRepo.findAdsOfUser(userID).stream()
                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
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

    //Get list of rejected ads of user
    public List<AdvertisementResponse> getListAdvertisementsRejectedOfUser() {
        return advertisementRepo.findAdsRejectedOfUser(userService.getMyInfo().getUserID()).stream()
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
        if(!userService.getMyInfo().getRoleName().equals("ADMIN")){
            throw new AppException(ErrorCode.UNAUTHORIZED);
        }
        if (!request.getNewStatus().equals("Verified") && !request.getNewStatus().equals("Rejected")) {
            throw new AppException(ErrorCode.STATUS_INVALID);
        }
        advertisement.setStatus(request.getNewStatus());
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    //delete ads has been rejected for 5 minutes
    @Scheduled(fixedRate = 300000)  // Run every 5 minutes
    public void deleteOldRejectedAdvertisements() {
        // Get the timestamp of 5 minutes ago
        LocalDateTime fiveMinutesAgo = LocalDateTime.now().minusMinutes(5);

        // Retrieve rejected advertisements older than 5 minutes
        List<Advertisement> oldRejectedAds = advertisementRepo.findRejectedAdvertisementsOlderThan5Mins(fiveMinutesAgo);

        // Delete all old rejected ads from the database
        advertisementRepo.deleteAll(oldRejectedAds);
    }

//    @Scheduled(cron = "0 0 0 */7 * *") run every 7 days at 0:00 at the morning
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
        if(!userService.getMyInfo().getUserID().equals(advertisement.getUser().getUserID())){
            throw new AppException(ErrorCode.UNAUTHORIZED);
        }
        advertisementMapper.updateAdvertisement(advertisement, request, elementRepo, categoryService);
        advertisement.setStatus("Pending");
        Set<Ads_Image> currentImages = advertisement.getImagesAd();
        Map<String, Ads_Image> existingImagesMap = currentImages.stream()
                .collect(Collectors.toMap(Ads_Image::getImageURL, image -> image));
        List<String> newImageIds = new ArrayList<>();
        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            // Remove images not in the updated list
            currentImages.removeIf(image -> !request.getImagesURL().contains(image.getImageURL()));
            // Add new images that are not already in the current collection
            for (String imageUrl : request.getImagesURL()) {
                if (!existingImagesMap.containsKey(imageUrl)) {
                    Ads_Image newImage = new Ads_Image();
                    String newImageId = generateImage_Ads();
                    newImage.setAdImageId(newImageId);
                    newImage.setImageURL(imageUrl);
                    newImage.setAdvertisement(advertisement);
                    currentImages.add(newImage);
                    newImageIds.add(newImageId);
                }
            }
        }
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    public void deleteAdvertisement(String adID) {
        Advertisement advertisement = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        if(userService.getMyInfo().getUserID().equals(advertisement.getUser().getUserID())
                || userService.getMyInfo().getRoleName().equals("ADMIN")){
            advertisementRepo.delete(advertisement);
        }else{
            throw new AppException(ErrorCode.UNAUTHORIZED);
        }

    }

    public String generateAdID(){

            String adID;
            int maxAttempts = 10; // Prevent infinite loop
            int attempts = 0;

            do {
                // Generate a random 9-digit number
                int randomNum = secureRandom.nextInt(900000000) + 100000000; // Ensures 9 digits
                adID = ID_PREFIX + randomNum;

                attempts++;

                if (attempts >= maxAttempts) {
                    throw new AppException(ErrorCode.UNABLE_TO_GENERATE_UNIQUE_ID);
                }
            } while (advertisementRepo.existsByAdID(adID));

            return adID;

    }

    public String generateImage_Ads(){
        return "I" + String.format("%05d", System.nanoTime() % 100000);
    }
}
