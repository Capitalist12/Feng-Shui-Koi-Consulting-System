package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.user.UpdateProfileRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.UserCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.UserUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.ProfileResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.UpdateProfileResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import org.mapstruct.*;

import com.example.Feng_Shui_Koi_Consulting_System.dto.authentication.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.authentication.SignUpResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "element", target = "element", qualifiedByName = "mapToElementName")
    SignUpResponse toSignUpResponse(User user);

    @Mapping(source = "email", target = "email")
    User toUser(SignUpRequest request);

    @Mapping(source = "element", target = "element", qualifiedByName = "mapToElement")
    User toUser(UserCreationRequest request, @Context ElementRepo elementRepo);


    @Mapping(source = "element", target = "element", qualifiedByName = "mapToElementName")
    UserResponse toUserResponse(User user);


    void updateUser(@MappingTarget User user, UserUpdateRequest request);

    @Mapping(target = "userID", source = "userID")
    @Mapping(target = "element", source = "element", qualifiedByName = "mapToElementName")
    ProfileResponse toProfileResponse(User user);

    @Mapping(target = "advertisements", ignore = true)
    @Mapping(target = "transaction", ignore = true)
    @Mapping(target = "element", ignore = true)
    void updateUserProfile(@MappingTarget User user, UpdateProfileRequest request);

    UpdateProfileResponse toUpdateProfileResponse(User user);

    @Named("mapToElement")
    default Element mapToElement(String element, @Context ElementRepo elementRepo) {
        return elementRepo.findByElementName(element)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

    }

    @Named("mapToElementName")
    default String mapToElementName(Element element) {
        return element.getElementName();

    }

}
