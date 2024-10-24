package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.CategoryResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.*;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.service.CategoryService;
import org.mapstruct.*;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AdvertisementMapper {
    @Mapping(source = "element", target = "element", qualifiedByName = "mapToElement")
    @Mapping(target = "category", source = "categoryName", qualifiedByName = "mapToCategory")
    @Mapping(target = "imagesAd", ignore = true)
    Advertisement toAdvertisement(AdvertisementCreationRequest request,
                                  @Context ElementRepo elementRepo,
                                  @Context CategoryService categoryService
    );

    @Mapping(target = "element", source = "element", qualifiedByName = "mapToElement")
    @Mapping(target = "category", source = "categoryName", qualifiedByName = "mapToCategory")
    @Mapping(target = "imagesAd", ignore = true)
    void updateAdvertisement(@MappingTarget Advertisement advertisement, AdvertisementUpdateRequest request,
                             @Context ElementRepo elementRepo,
                             @Context CategoryService categoryService);

    @Mapping(target = "element", source = "element", qualifiedByName = "mapToElementName")
    @Mapping(target = "category", source = "category", qualifiedByName = "mapToCategoryResponse")
    @Mapping(target = "user", source = "user", qualifiedByName = "mapToUserResponse")
    @Mapping(target = "imagesAd", source = "imagesAd")
    AdvertisementResponse toAdvertisementResponse(Advertisement advertisement);


    @Named("mapToCategory")
    default Category mapToCategory(String categoryName, @Context CategoryService categoryService) {
        return categoryService.findByCategoryName(categoryName);
    }

    @Named("mapToElement")
    default Element mapToElement(String element, @Context ElementRepo elementRepo) {
        return elementRepo.findByElementName(element)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
    }

    @Named("mapToElementName")
    default String mapToElementName(Element element) {
        return element.getElementName();  // Simple mapping from entity to string
    }
    @Named("mapToUserName")
    default String mapToUserName(User user) {
        return user.getUsername();  // Simple mapping from entity to string
    }

    @Named("mapToCategoryResponse")
    default CategoryResponse mapToCategoryResponse(Category category) {
        return CategoryResponse.builder()
                .categoryName(category.getCategoryName())
                .build();
    }
//    @Named("mapToUser")
//    default User mapToUser(String username, @Context UserService userService) {
//        return userService.findByUsername(username);
//
//    }

    @Named("mapToUserResponse")
    default UserResponse mapToUserResponse(User user) {
        return UserResponse.builder()
                .username(user.getUsername())
                .roleName(user.getRoleName())
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
                        .color(element.getColor())
                        .generation(element.getGeneration())
                        .inhibition(element.getInhibition())
                        .build())
                .collect(Collectors.toSet());
    }

}
