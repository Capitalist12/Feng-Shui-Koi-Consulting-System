package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.SignUpRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ProfileResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.SignUpResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.4 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public SignUpResponse toSignUpResponse(User user) {
        if ( user == null ) {
            return null;
        }

        SignUpResponse.SignUpResponseBuilder signUpResponse = SignUpResponse.builder();

        signUpResponse.element( mapToElementName( user.getElement() ) );
        signUpResponse.userID( user.getUserID() );
        signUpResponse.username( user.getUsername() );
        signUpResponse.password( user.getPassword() );
        signUpResponse.dateOfBirth( user.getDateOfBirth() );
        signUpResponse.email( user.getEmail() );
        signUpResponse.imageLink( user.getImageLink() );
        signUpResponse.roleName( user.getRoleName() );
        signUpResponse.deleteStatus( user.isDeleteStatus() );

        return signUpResponse.build();
    }

    @Override
    public User toUser(SignUpRequest request) {
        if ( request == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.email( request.getEmail() );
        user.username( request.getUsername() );
        user.password( request.getPassword() );
        user.dateOfBirth( request.getDateOfBirth() );

        return user.build();
    }

    @Override
    public User toUser(UserCreationRequest request, ElementRepo elementRepo) {
        if ( request == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.element( mapToElement( request.getElement(), elementRepo ) );
        user.username( request.getUsername() );
        user.password( request.getPassword() );
        user.dateOfBirth( request.getDateOfBirth() );
        user.email( request.getEmail() );
        user.deleteStatus( request.isDeleteStatus() );

        return user.build();
    }

    @Override
    public UserResponse toUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse.UserResponseBuilder userResponse = UserResponse.builder();

        userResponse.element( mapToElementName( user.getElement() ) );
        userResponse.userID( user.getUserID() );
        userResponse.username( user.getUsername() );
        userResponse.password( user.getPassword() );
        userResponse.email( user.getEmail() );
        userResponse.dateOfBirth( user.getDateOfBirth() );
        userResponse.roleName( user.getRoleName() );
        userResponse.imageLink( user.getImageLink() );
        userResponse.deleteStatus( user.isDeleteStatus() );

        return userResponse.build();
    }

    @Override
    public void updateUser(User user, UserUpdateRequest request, ElementRepo elementRepo) {
        if ( request == null ) {
            return;
        }

        user.setElement( mapToElement( request.getElement(), elementRepo ) );
        user.setPassword( request.getPassword() );
        user.setDateOfBirth( request.getDateOfBirth() );
        user.setEmail( request.getEmail() );
        user.setImageLink( request.getImageLink() );
        user.setRoleName( request.getRoleName() );
        user.setDeleteStatus( request.isDeleteStatus() );
    }

    @Override
    public ProfileResponse toProfileResponse(User user) {
        if ( user == null ) {
            return null;
        }

        ProfileResponse.ProfileResponseBuilder profileResponse = ProfileResponse.builder();

        profileResponse.userID( user.getUserID() );
        profileResponse.element( mapToElementName( user.getElement() ) );
        profileResponse.username( user.getUsername() );
        profileResponse.password( user.getPassword() );
        profileResponse.email( user.getEmail() );
        profileResponse.dateOfBirth( user.getDateOfBirth() );
        profileResponse.roleName( user.getRoleName() );
        profileResponse.imageLink( user.getImageLink() );

        return profileResponse.build();
    }
}
