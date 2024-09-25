package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiFishRespon;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiTypesResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Koi_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.FishRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.KoiTypeRepo;
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
     KoiTypeRepo koiTypeRepo;
     ElementRepo elementRepo;

    public KoiFishRespon createFish(FishCreationRequest request) {
        // Check if the fish with the given name already exists
        if (fishRepo.existsByName(request.getName())) {
            throw new AppException(ErrorCode.FISH_EXISTED);
        }

            // Convert the request to a KoiFish entity
            KoiFish fish = new KoiFish();
            fish.setId(generateKoiID());
            fish.setName(request.getName());
            fish.setColor(request.getColor());
            fish.setSize(request.getSize());
            fish.setWeight(request.getWeight());
            fish.setDescription(request.getDescription());

            // Handle the imagesFish Set (which contains strings in the request)
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

            // Handle koiType
        KoiTypesResponse koiTypesResponse = null;
        if (request.getKoiTypeName() != null) {
            var koiType = koiTypeRepo.findByTypeName(request.getKoiTypeName())
                    .orElseThrow(() -> new AppException(ErrorCode.KOI_TYPE_NOT_EXIST));

            // Convert KoiTypes to KoiTypesResponse if needed
            koiTypesResponse = KoiTypesResponse.builder()
                    .typeName(koiType.getTypeName())
                    .description(koiType.getDescription())
                    .build();

            fish.setKoiTypes(koiType);
        }

        Set<ElementResponse> elementResponses = new HashSet<>();
        if (request.getElements() != null && !request.getElements().isEmpty()) {
            Set<Element> elements = request.getElements().stream()
                    .map(elementName -> elementRepo.findByElementName(elementName)
                            .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST)))
                    .collect(Collectors.toSet());

            // Convert elements to ElementResponse
            elementResponses = elements.stream()
                    .map(element -> ElementResponse.builder()
                            .elementId(element.getElementId())
                            .elementName(element.getElementName())
                            .description(element.getDescription())
                            .quantity(element.getQuantity())
                            .direction(element.getDirection())
                            .value(element.getValue())
                            .build())
                    .collect(Collectors.toSet());

            // Set elements in the fish entity (optional, if needed for other processing)
            fish.setElements(elements);
        }

            KoiFish savedFish = fishRepo.save(fish);


            // Return the response
            return KoiFishRespon.builder()
                    .id(savedFish.getId())
                    .name(savedFish.getName())
                    .size(savedFish.getSize())
                    .weight(savedFish.getWeight())
                    .color(savedFish.getColor())
                    .description(savedFish.getDescription())
                    .koiTypes(koiTypesResponse)
                    .imagesFish(savedFish.getImagesFish())
                    .elements(elementResponses)
                    .build();
        }


    public List<KoiFishRespon> getFish() {
        return fishRepo.findAll().stream().map(fish -> {

            Set<ElementResponse> elementResponses = fish.getElements().stream()
                    .map(element -> ElementResponse.builder()
                            .elementId(element.getElementId())
                            .elementName(element.getElementName())
                            .description(element.getDescription())
                            .quantity(element.getQuantity())
                            .direction(element.getDirection())
                            .value(element.getValue())
                            .build())
                    .collect(Collectors.toSet());

            KoiTypesResponse koiTypesResponse = null;

                var koiType = fish.getKoiTypes();
                // Convert KoiTypes to KoiTypesResponse if needed
                koiTypesResponse = KoiTypesResponse.builder()
                        .typeName(koiType.getTypeName())
                        .description(koiType.getDescription())
                        .build();

            return KoiFishRespon.builder()
                    .id(fish.getId())
                    .name(fish.getName())
                    .size(fish.getSize())
                    .weight(fish.getWeight())
                    .color(fish.getColor())
                    .description(fish.getDescription())
                    .koiTypes(koiTypesResponse)  // Assuming KoiType is already mapped
                    .imagesFish(fish.getImagesFish())  // Converted Set<ImageResponse>
                    .elements(elementResponses)  // Assuming elements are already mapped
                    .build();
        }).collect(Collectors.toList());
    }

    public KoiFish getFish(String id){
        return fishRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.FISH_NOT_FOUND));
    }


    public KoiFishRespon updateFish(String fishId, FishUpdateRequest request){
        KoiFish fish = fishRepo.findById(fishId).orElseThrow(()
                        -> new AppException(ErrorCode.FISH_NOT_FOUND));
        fish.setName(request.getName());
        fish.setColor(request.getColor());
        fish.setSize(request.getSize());
        fish.setWeight(request.getWeight());
        fish.setDescription(request.getDescription());

        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            Set<Koi_Image> koiImageEntities = request.getImagesURL().stream()
                    .map(imageUrl -> {
                        // Create new Image entities, linking them to the koiFish
                        Koi_Image koiImage = new Koi_Image();
                        koiImage.setImageURL(imageUrl);  // Set the image link from the request
                        koiImage.setKoiFish(fish);        // Set the association to the koiFish
                        // Handle Tank relationship here if needed, assuming the Tank is already available or from another part of the request
                        // image.setTank(tank); // You can add tank reference if the Tank entity is required.
                        return koiImage;
                    })
                    .collect(Collectors.toSet());
            fish.setImagesFish(koiImageEntities); // Set the images in the KoiFish entity
        }

        // Handle koiType
        KoiTypesResponse koiTypesResponse = null;
        if (request.getKoiTypeName() != null) {
            var koiType = koiTypeRepo.findByTypeName(request.getKoiTypeName())
                    .orElseThrow(() -> new AppException(ErrorCode.KOI_TYPE_NOT_EXIST));

            // Convert KoiTypes to KoiTypesResponse if needed
            koiTypesResponse = KoiTypesResponse.builder()
                    .typeName(koiType.getTypeName())
                    .description(koiType.getDescription())
                    .build();

            fish.setKoiTypes(koiType);
        }

        Set<ElementResponse> elementResponses = new HashSet<>();
        if (request.getElements() != null && !request.getElements().isEmpty()) {
            Set<Element> elements = request.getElements().stream()
                    .map(elementName -> elementRepo.findByElementName(elementName)
                            .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST)))
                    .collect(Collectors.toSet());

            // Convert elements to ElementResponse
            elementResponses = elements.stream()
                    .map(element -> ElementResponse.builder()
                            .elementId(element.getElementId())
                            .elementName(element.getElementName())
                            .description(element.getDescription())
                            .quantity(element.getQuantity())
                            .direction(element.getDirection())
                            .value(element.getValue())
                            .build())
                    .collect(Collectors.toSet());

            // Set elements in the fish entity (optional, if needed for other processing)
            fish.setElements(elements);
        }



        // Return the response
        return KoiFishRespon.builder()
                .id(fish.getId())
                .name(fish.getName())
                .size(fish.getSize())
                .weight(fish.getWeight())
                .color(fish.getColor())
                .description(fish.getDescription())
                .koiTypes(koiTypesResponse)
                .imagesFish(fish.getImagesFish())
                .elements(elementResponses)
                .build();

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

    public String generateKoiID(){
        return "KF" + String.format("%05d", System.nanoTime() % 100000);
    }

    public String generateImage_Koi(){
        return "I" + String.format("%05d", System.nanoTime() % 100000);
    }
}
