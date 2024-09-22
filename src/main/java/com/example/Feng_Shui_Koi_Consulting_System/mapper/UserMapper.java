package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import org.mapstruct.*;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(source = "email", target = "email")
    User toUser(SignUpRequest request);
    User toUser(UserCreationRequest request);
    SignUpResponse toSignUpResponse(User user);
    UserResponse toUserResponse(User user);
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
