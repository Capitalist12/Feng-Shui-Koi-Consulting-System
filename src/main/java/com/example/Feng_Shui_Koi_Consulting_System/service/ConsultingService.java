package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.*;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
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
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ConsultingService {

    FishRepo fishRepo;
    TankRepo tankRepo;
    UserRepository userRepository;
    ElementMapper elementMapper;

    public List<ConsultingFishResponse> koiFishList(String userID){
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
        Integer elementID = user.getElementID();
        return fishRepo.findByElementID(elementID).stream().map(fish -> {
            KoiTypesResponse koiTypesResponse = null;
            var koiType = fish.getKoiTypes();
            // Convert KoiTypes to KoiTypesResponse if needed
            koiTypesResponse = KoiTypesResponse.builder()
                    .typeName(koiType.getTypeName())
                    .description(koiType.getDescription())
                    .build();

            return ConsultingFishResponse.builder()
                    .id((fish.getId()))
                    .name(fish.getName())
                    .size(fish.getSize())
                    .weight(fish.getWeight())
                    .color(fish.getColor())
                    .description(fish.getDescription())
                    .koiTypes(koiTypesResponse)  // Assuming KoiType is already mapped
                    .imagesFish(fish.getImagesFish())  // Converted Set<ImageResponse>
                    .build();
        }).collect(Collectors.toList());
    }

    public List<ConsultingTankResponse> tankList(String userID)
    {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
        Integer elementID = user.getElementID();
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
