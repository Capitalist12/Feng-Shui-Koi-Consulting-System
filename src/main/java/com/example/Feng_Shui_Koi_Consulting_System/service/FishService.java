package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KoiFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Koi_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.KoiFishMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.FishRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Service
public class FishService {

     FishRepo fishRepo;
     KoiFishMapper koiFishMapper;
     KoiTypeService koiTypeService;
     ElementRepo elementRepo;

    //Constant for generating FishID
    private static final String FISH_ID_PREFIX = "KF";
    private final SecureRandom secureRandom = new SecureRandom();
//Method to add fish to data
    public KoiFishResponse createFish(FishCreationRequest request) {
        // Check if the fish with the given name already exists
        if (fishRepo.existsByName(request.getName())) {
            throw new AppException(ErrorCode.FISH_EXISTED);
        }
        // Convert the request to a KoiFish entity
        KoiFish fish =  koiFishMapper.toKoiFish(request, koiTypeService, elementRepo);
        fish.setId(generateKoiID());

        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            // Convert each image URL from the request into a Koi_Image entity
            Set<Koi_Image> koiImageEntities = request.getImagesURL().stream()
                    .map(imageUrl -> {
                        Koi_Image koiImage = new Koi_Image();
                        koiImage.setKoiImageId(generateImage_Koi());
                        koiImage.setImageURL(imageUrl);
                        koiImage.setKoiFish(fish);
                        return koiImage;
                    })
                    .collect(Collectors.toSet());
            fish.setImagesFish(koiImageEntities);
        }
        return koiFishMapper.toKoiFishResponse(fishRepo.save(fish));
    }

//Method to get list of fish
    public List<KoiFishResponse> getFish() {
        return fishRepo.findAll().stream()
                .map(koiFishMapper :: toKoiFishResponse).collect(Collectors.toList());
    }

    public KoiFishResponse getFishById(String id){
        KoiFish fish =  fishRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.FISH_NOT_FOUND));
        return koiFishMapper.toKoiFishResponse(fish);

    }

//Method to upadte infomation of fish
    public KoiFishResponse updateFish(String fishId, FishUpdateRequest request) {

        KoiFish fish = fishRepo.findById(fishId)
                .orElseThrow(() -> new AppException(ErrorCode.FISH_NOT_FOUND));

        // Use mapstruct to update infomation of fish
        koiFishMapper.updateKoiFish(fish, request,
                koiTypeService, elementRepo);

        // Handle koi images
        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            Set<String> newImageUrls = new HashSet<>(request.getImagesURL());

            Set<Koi_Image> existingImages = fish.getImagesFish();
            // Remove images that are no longer in the request
            existingImages.removeIf(existingImage -> !newImageUrls
                    .contains(existingImage.getImageURL()));
            // Add new images
            newImageUrls.forEach(imageUrl -> {
                boolean exists = existingImages.stream()
                        .anyMatch(existingImage -> existingImage.getImageURL().equals(imageUrl));
                if (!exists) {

                    Koi_Image koiImage = new Koi_Image();
                    koiImage.setKoiImageId(generateImage_Koi());
                    koiImage.setImageURL(imageUrl);
                    koiImage.setKoiFish(fish);
                    // Add new image to existing images
                    existingImages.add(koiImage);
                }
            });
            fish.setImagesFish(existingImages);
        }

        return koiFishMapper.toKoiFishResponse(fishRepo.save(fish));
    }

//Method to delete koi fish
    public void deleteFish(String fishId) {

        KoiFish fish = fishRepo.findById(fishId).orElseThrow(() ->
                new AppException(ErrorCode.FISH_NOT_FOUND));

        // Remove the KoiFish have relationship with Elements
        if (fish.getElements() != null) {
            for (Element element : fish.getElements()) {
                // Remove this KoiFish from the Element's KoiFish set
                element.getKoiFishSet().remove(fish);
            }
        }
        // Clear the association in the KoiFish (optional)
        fish.getElements().clear();

        fishRepo.delete(fish);
    }
//Method  auto generate Id for fish
    public String generateKoiID(){
        String fishID;
        int maxAttempts = 10; // Prevent infinite loop
        int attempts = 0;

        do {
            // Generate a random 9-digit number
            int randomNum = secureRandom.nextInt(900000000) + 100000000; // Ensures 9 digits
            fishID = FISH_ID_PREFIX + randomNum;

            attempts++;

            if (attempts >= maxAttempts) {
                throw new AppException(ErrorCode.UNABLE_TO_GENERATE_UNIQUE_ID);
            }
        } while (fishRepo.existsById(fishID));

        return fishID;
    }
//Method auto generate id for image
    public String generateImage_Koi(){
        return "I" + String.format("%05d", System.nanoTime() % 100000);
    }
}
