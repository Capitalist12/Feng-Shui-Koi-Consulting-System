package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiTypesResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiTypes;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.service.KoiTypeService;
import org.mapstruct.*;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface KoiFishMapper {


    @Mapping(target = "koiTypes", source = "koiTypeName", qualifiedByName = "mapToKoiType")
    @Mapping(target = "elements", source = "elements", qualifiedByName = "mapToElement")
    @Mapping(target = "imagesFish", ignore = true)
    KoiFish toKoiFish(FishCreationRequest request,
                      @Context KoiTypeService koiTypeService,
                      @Context ElementRepo elementRepo);

    @Mapping(target = "koiTypes", source = "koiTypeName", qualifiedByName = "mapToKoiType")
    @Mapping(target = "elements", source = "elements", qualifiedByName = "mapToElement")
    @Mapping(target = "imagesFish", ignore = true)
    void updateKoiFish(@MappingTarget KoiFish koiFish, FishUpdateRequest request,
                       @Context KoiTypeService koiTypeService,
                       @Context ElementRepo elementRepo);

    @Mapping(target = "koiTypes", source = "koiTypes", qualifiedByName = "mapToKoiTypesResponse")
    @Mapping(target = "elements", source = "elements", qualifiedByName = "mapToElementResponse")
    KoiFishResponse toKoiFishRespon(KoiFish koiFish);


    @Named("mapToKoiType")
    default KoiTypes mapToKoiType(String koiTypeName, @Context KoiTypeService koiTypeService) {
        return koiTypeService.findByTypeName(koiTypeName);
    }

    @Named("mapToElement")
    default Set<Element> mapToElement(Set<String> elements, @Context ElementRepo elementRepo) {
        Set<Element> element = elements.stream()
                .map(elementName -> elementRepo.findByElementName(elementName)
                        .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST)))
                .collect(Collectors.toSet());
        return element;
    }

    @Named("mapToKoiTypesResponse")
    default KoiTypesResponse mapToKoiTypesResponse(KoiTypes koiTypes) {
        return KoiTypesResponse.builder()
                .typeName(koiTypes.getTypeName())
                .description(koiTypes.getDescription())
                .build();
    }

    @Named("mapToElementResponse")
    default Set<ElementResponse> mapToElementResponse(Set<Element> elements) {
        return elements.stream()
                .map(element -> ElementResponse.builder()
                        .elementId(element.getElementId())
                        .elementName(element.getElementName())
                        .description(element.getDescription())
                        .quantity(element.getQuantity())
                        .direction(element.getDirection())
                        .value(element.getValue())
                        .build())
                .collect(Collectors.toSet());
    }
}
