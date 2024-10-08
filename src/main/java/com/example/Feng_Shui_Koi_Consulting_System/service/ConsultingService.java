package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.response.*;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.ElementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.FishRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TankRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
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
    UserRepository userRepository;
    ElementMapper elementMapper;
    ElementCalculationService elementCalculationService;

    public List<ConsultingFishResponse> koiFishList(String userID){
        // Fetch the user
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));

        // Get the user's element ID
        int elementID = elementCalculationService
                .calculateElementId(user.getDateOfBirth());

        // Fetch the Element entity by the elementID
        Element element = elementRepo.findById(elementID)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

        // Get the generation (element that supports this one)
        String generation = element.getGeneration();

        // Find KoiFish by elementID or supported generation name
        return fishRepo.findByElementIDOrGeneration(elementID, generation).stream()
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

    public List<ConsultingTankResponse> tankList(String userID)
    {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
        Integer elementID = user.getElement().getElementId();
        return tankRepo.findByElementTank_ElementId(elementID).stream().map(tank -> {
            ElementResponse elementResponse = elementMapper
                    .toElementResponse(tank.getElementTank());
            return ConsultingTankResponse.builder()
                    .tankId(tank.getTankId())
                    .shape(tank.getShape())
                    .imageURL(tank.getImageURL())
                    .elementTank(elementResponse)
                    .build();
        }).collect(Collectors.toList());
    }
}

