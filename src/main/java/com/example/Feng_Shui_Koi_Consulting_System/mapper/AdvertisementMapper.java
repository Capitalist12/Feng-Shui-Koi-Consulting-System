package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.CategoryResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Category;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.CategoryRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface AdvertisementMapper {
    @Mapping(target = "element", source = "elementID", qualifiedByName = "mapToElement")
    @Mapping(target = "category", source = "categoryID", qualifiedByName = "mapToCategory")
    @Mapping(target = "user", source = "userID", qualifiedByName = "mapToUser")
    Advertisement toAdvertisement(AdvertisementCreationRequest advertisementRequest,
                                  @Context ElementRepo elementRepo,
                                  @Context CategoryRepo categoryRepo,
                                  @Context UserRepository userRepository);

    // Map from Advertisement entity to the response DTO
    @Mapping(target = "element", source = "element", qualifiedByName = "mapToElementResponse")
    @Mapping(target = "category", source = "category", qualifiedByName = "mapToCategoryResponse")
    @Mapping(target = "user", source = "user", qualifiedByName = "mapToUserResponse")
    AdvertisementResponse toAdvertisementResponse(Advertisement advertisement);

    // Update an existing Advertisement entity with data from the update request
    @Mapping(target = "element", source = "elementID", qualifiedByName = "mapToElement")
    @Mapping(target = "category", source = "categoryID", qualifiedByName = "mapToCategory")
    @Mapping(target = "user", source = "userID", qualifiedByName = "mapToUser")
    void updateAdvertisement(@MappingTarget Advertisement advertisement, AdvertisementUpdateRequest request,
                             @Context ElementRepo elementRepo,
                             @Context CategoryRepo categoryRepo,
                             @Context UserRepository userRepository);

    // Custom mapping for Element
    @Named("mapToElement")
    default Element mapToElement(Integer elementID, @Context ElementRepo elementRepo) {
        return elementRepo.findById(elementID)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
    }

    // Custom mapping for Category
    @Named("mapToCategory")
    default Category mapToCategory(String categoryID, @Context CategoryRepo categoryRepo) {
        return categoryRepo.findById(categoryID)
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_EXIST));
    }

    // Custom mapping for User
    @Named("mapToUser")
    default User mapToUser(String userID, @Context UserRepository userRepo) {
        return userRepo.findById(userID)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
    }

    // Custom mapping for Element to ElementResponse
    @Named("mapToElementResponse")
    default ElementResponse mapToElementResponse(Element element) {
        return ElementResponse.builder()
                .elementId(element.getElementId())
                .elementName(element.getElementName())
                .description(element.getDescription())
                .quantity(element.getQuantity())
                .direction(element.getDirection())
                .value(element.getValue())
                .color(element.getColor())
                .generation(element.getGeneration())
                .inhibition(element.getInhibition())
                .build();
    }

    // Custom mapping for Category to CategoryResponse
    @Named("mapToCategoryResponse")
    default CategoryResponse mapToCategoryResponse(Category category) {
        return CategoryResponse.builder()
                .categoryId(category.getCategoryId())
                .categoryName(category.getCategoryName())
                .build();
    }

    // Custom mapping for User to UserResponse
    @Named("mapToUserResponse")
    default UserResponse mapToUserResponse(User user) {
        return UserResponse.builder()
                .userID(user.getUserID())
                .username(user.getUsername())
                .email(user.getEmail())
                .dateOfBirth(user.getDateOfBirth())
                .build();
    }
}
