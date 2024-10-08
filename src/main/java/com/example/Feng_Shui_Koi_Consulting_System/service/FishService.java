package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiFishResponse;
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

    public KoiFishResponse createFish(FishCreationRequest request) {
        // Check if the fish with the given name already exists
        if (fishRepo.existsByName(request.getName())) {
            throw new AppException(ErrorCode.FISH_EXISTED);
        }
        // Convert the request to a KoiFish entity
        KoiFish fish = koiFishMapper.toKoiFish(request, koiTypeService, elementRepo);
        fish.setId(generateKoiID());
        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            Set<Koi_Image> koiImageEntities = request.getImagesURL().stream()
                    .map(imageUrl -> {
                        // Create new Image entities, linking them to the koiFish
                        Koi_Image koiImage = new Koi_Image();
                        koiImage.setKoiImageId(generateImage_Koi());
                        koiImage.setImageURL(imageUrl);  // Set the image link from the request
                        koiImage.setKoiFish(fish);        // Set the association to the koiFish
                        // Handle Tank relationship here if needed, assuming the Tank is already available or from another part of the request
                        // image.setTank(tank); // You can add tank reference if the Tank entity is required.
                        return koiImage;
                    })
                    .collect(Collectors.toSet());
            fish.setImagesFish(koiImageEntities); // Set the images in the KoiFish entity
        }
        return koiFishMapper.toKoiFishRespon(fishRepo.save(fish));
    }


    public List<KoiFishResponse> getFish() {
        return fishRepo.findAll().stream()
                .map(koiFishMapper::toKoiFishRespon).collect(Collectors.toList());
    }

    public KoiFishResponse getFishById(String id) {
        KoiFish fish = fishRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.FISH_NOT_FOUND));
        return koiFishMapper.toKoiFishRespon(fish);

    }


    public KoiFishResponse updateFish(String fishId, FishUpdateRequest request) {
        // Find existing fish or throw an exception
        KoiFish fish = fishRepo.findById(fishId)
                .orElseThrow(() -> new AppException(ErrorCode.FISH_NOT_FOUND));

        // Update basic fields
        koiFishMapper.updateKoiFish(fish, request,
                koiTypeService, elementRepo);

        // Handle koi images
        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            Set<String> newImageUrls = new HashSet<>(request.getImagesURL());
            // Get existing images
            Set<Koi_Image> existingImages = fish.getImagesFish();
            // Remove images that are no longer in the request
            existingImages.removeIf(existingImage -> !newImageUrls
                    .contains(existingImage.getImageURL()));
            // Add new images
            newImageUrls.forEach(imageUrl -> {
                boolean exists = existingImages.stream()
                        .anyMatch(existingImage -> existingImage.getImageURL().equals(imageUrl));
                if (!exists) {
                    // Create new image entity
                    Koi_Image koiImage = new Koi_Image();
                    koiImage.setKoiImageId(generateImage_Koi());  // You may want to ensure this generates unique IDs
                    koiImage.setImageURL(imageUrl);
                    koiImage.setKoiFish(fish);  // Maintain bidirectional relationship
                    // Add new image to existing images
                    existingImages.add(koiImage);
                }
            });
            // Set updated images back to the fish entity
            fish.setImagesFish(existingImages);
        }

        // Return the response
        return koiFishMapper.toKoiFishRespon(fishRepo.save(fish));
    }

    public void deleteFish(String fishId) {
        // Find the KoiFish by its ID
        KoiFish fish = fishRepo.findById(fishId).orElseThrow(() ->
                new AppException(ErrorCode.FISH_NOT_FOUND));

        // Remove the KoiFish from all associated Elements
        if (fish.getElements() != null) {
            for (Element element : fish.getElements()) {
                // Remove this KoiFish from the Element's KoiFish set
                element.getKoiFishSet().remove(fish); // Assuming getKoiFishSet() is defined in Element
            }
        }
        // Clear the association in the KoiFish (optional)
        fish.getElements().clear(); // Clear the set of Elements in the KoiFish
        // Now you can safely delete the KoiFish
        fishRepo.delete(fish); // Use the entity to delete
    }

    public String generateKoiID() {
        return "KF" + String.format("%05d", System.nanoTime() % 1000);
    }

    public String generateImage_Koi() {
        return "I" + String.format("%05d", System.nanoTime() % 1000);
    }
}
