package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ProfileResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import org.mapstruct.*;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Set;
import java.util.stream.Collectors;

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

    @Mapping(source = "element", target = "element", qualifiedByName = "mapToElement")
    void updateUser(@MappingTarget User user, UserUpdateRequest request,
                    @Context ElementRepo elementRepo);

    @Mapping(target = "element", source = "element", qualifiedByName = "mapToElementName")
    @Mapping(target = "userID", source = "userID")
    @Mapping(t)
    ProfileResponse toProfileResponse(User user);

    @Named("mapToElement")
    default Element mapToElement(String element, @Context ElementRepo elementRepo) {
        Element destiny =  elementRepo.findByElementName(element)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
        return destiny;
    }

    @Named("mapToElementName")
    default String mapToElementName(Element element) {
        String elementName =  element.getElementName();
        return elementName;
    }

}
