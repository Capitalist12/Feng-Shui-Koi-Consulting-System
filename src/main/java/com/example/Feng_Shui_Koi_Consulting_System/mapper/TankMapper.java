package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface TankMapper {

    @Mapping(target = "elementTank", source = "element", qualifiedByName = "mapToElement")
    Tank toTank(TankCreationRequest request, @Context ElementRepo elementRepo);

    @Mapping(target = "elementTank", source = "elementTank", qualifiedByName = "mapToElementResponse")
    TankResponse toTankResponse(Tank tank);

    @Mapping(target = "elementTank", source = "element", qualifiedByName = "mapToElement")
    void updateTank(@MappingTarget Tank tank, TankUpdateRequest request,
                    @Context ElementRepo elementRepo);

    @Named("mapToElement")
    default Element mapToElement(String element, @Context ElementRepo elementRepo) {
        return elementRepo.findByElementName(element).
                orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
    }

    @Named("mapToElementResponse")
    default ElementResponse mapToElementResponse(Element elementTank) {
        return ElementResponse.builder()
                .elementId(elementTank.getElementId())
                .elementName(elementTank.getElementName())
                .description(elementTank.getDescription())
                .quantity(elementTank.getQuantity())
                .direction(elementTank.getDirection())
                .value(elementTank.getValue())
                .color(elementTank.getColor())
                .generation(elementTank.getGeneration())
                .inhibition(elementTank.getInhibition())
                .build();
    }

}
