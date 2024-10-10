package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ConsultingRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.*;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.ElementMapper;
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
    ElementRepo elementRepo;
    ElementMapper elementMapper;
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
            ElementResponse elementResponse = elementMapper
                    .toElementResponse(tank.getElementTank());
            return ConsultingTankResponse.builder()
                    .tankId(tank.getTankId())
                    .shape(tank.getShape())
                    .imageURL(tank.getImageURL())
//                    .elementTank(elementResponse)
                    .build();
        }).collect(Collectors.toList());
    }
}

