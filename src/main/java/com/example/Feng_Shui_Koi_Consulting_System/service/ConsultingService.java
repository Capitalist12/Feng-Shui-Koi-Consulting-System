package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.CategoryResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.consulting.ConsultingAdResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.consulting.ConsultingFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.consulting.ConsultingTankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KoiTypesResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.consulting.ConsultingRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Category;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.AdvertisementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.ElementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.AdvertisementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.FishRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TankRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ConsultingService {

    FishRepo fishRepo;
    TankRepo tankRepo;
    AdvertisementRepo advertisementRepo;
    ElementRepo elementRepo;
    ElementCalculationService elementCalculationService;

    public List<ConsultingFishResponse> koiFishList(ConsultingRequest request) {
        // Calculate the user's elementID based on the date of birth
        int elementID = elementCalculationService.calculateElementId(request.getDob());

        // Fetch the Element entity by the elementID
        Element element = elementRepo.findById(elementID)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

        // Get the generation (element that supports this element)
        String generation = element.getGeneration();

        // Fetch the KoiFish that match either the user's elementID or the supporting generation
        List<KoiFish> koiFishList = fishRepo.findByElementIDOrGeneration(elementID, generation);

        // Map the KoiFish entities to ConsultingFishResponse
        return koiFishList.stream()
                .map(fish -> {
                    // Prepare KoiTypesResponse
                    var koiType = fish.getKoiTypes();
                    KoiTypesResponse koiTypesResponse = KoiTypesResponse.builder()
                            .typeName(koiType.getTypeName())
                            .description(koiType.getDescription())
                            .build();

                    // Build ConsultingFishResponse
                    return ConsultingFishResponse.builder()
                            .id(fish.getId())
                            .name(fish.getName())
                            .size(fish.getSize())
                            .weight(fish.getWeight())
                            .color(fish.getColor())
                            .description(fish.getDescription())
                            .koiTypes(koiTypesResponse)
                            .imagesFish(fish.getImagesFish())
                            .build();
                })
                .collect(Collectors.toList());
    }

    public List<ConsultingTankResponse> tankList(ConsultingRequest request)
    {
        Integer elementID = elementCalculationService.calculateElementId(request.getDob());
        return tankRepo.findByElementTank_ElementId(elementID).stream().map(tank -> {
            return ConsultingTankResponse.builder()
                    .tankId(tank.getTankId())
                    .shape(tank.getShape())
                    .imageURL(tank.getImageURL())
                    .build();
        }).collect(Collectors.toList());
    }

    //Get list of ads suitable with user's element
    public List<ConsultingAdResponse> adList(ConsultingRequest request){
        Integer elementID = elementCalculationService.calculateElementId(request.getDob());
        return advertisementRepo.findAdsByUserElement(elementID).stream().map(advertisement -> {
            Category category = advertisement.getCategory();
            CategoryResponse categoryResponse = CategoryResponse.builder()
                    .categoryID(category.getCategoryID())
                    .categoryName(category.getCategoryName())
                    .build();

            return ConsultingAdResponse.builder()
                    .adID(advertisement.getAdID())
                    .price(advertisement.getPrice())
                    .createdDate(advertisement.getCreatedDate())
                    .title(advertisement.getTitle())
                    .imagesAd(advertisement.getImagesAd())
                    .category(categoryResponse)
                    .build();
        }).collect(Collectors.toList());
    }
}

