package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.authentication.PasswordCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.*;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Roles;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.UserMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.security.SecureRandom;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService {
     UserRepository userRepository;
     UserMapper userMapper;
     ElementRepo elementRepo;
     ElementCalculationService elementCalculationService;

    //Constant for generating UserID
    private static final String ID_PREFIX = "U";
    private final SecureRandom secureRandom = new SecureRandom();


    public UserResponse createUser(UserCreationRequest request) {

        if (userRepository.existsByUsername(request.getUsername()))
            throw new AppException(ErrorCode.USER_EXIST);
        if (userRepository.existsByEmail(request.getEmail()))
            throw new AppException(ErrorCode.EMAIL_EXITST);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        User user = userMapper.toUser(request, elementRepo);
        user.setUserID(generateUserID());
        user.setRoleName(String.valueOf(Roles.USER));
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return userMapper.toUserResponse(userRepository.save(user));
    }

    private String generateUserID() {
        String userID;
        int maxAttempts = 10; // Prevent infinite loop
        int attempts = 0;

        do {
            // Generate a random 9-digit number
            int randomNum = secureRandom.nextInt(900000000) + 100000000; // Ensures 9 digits
            userID = ID_PREFIX + randomNum;

            attempts++;
            if (attempts >= maxAttempts) {
                throw new AppException(ErrorCode.UNABLE_TO_GENERATE_UNIQUE_ID);
            }
        } while (userRepository.existsById(userID));

        return userID;
    }


//@PreAuthorize("hasRole('ADMIN')")
    public List<UserResponse> geUsers(){
        return userRepository.findAll().stream()
                .map(userMapper :: toUserResponse).collect(Collectors.toList());
    }

    public UserResponse getUserById(String id) {
        User user =  userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
        return userMapper.toUserResponse(user);

    }

    //admin update user's delete status and role
    public UserResponse updateUser(String userID, UserUpdateRequest request){
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXIST));
        userMapper.updateUser(user, request,
                elementRepo);
        user.setRoleName(request.getRoleName());
        user.setDeleteStatus(request.isDeleteStatus());
        return userMapper.toUserResponse(userRepository.save(user));
    }

    public void deleteUser(String userID){
        userRepository.deleteById(userID);
    }

    public UserResponse getMyInfo() {
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

        var userResponse = userMapper.toUserResponse(user);
        userResponse.setNoPassword(!StringUtils.hasText(user.getPassword()));
        userResponse.setNoDob(user.getDateOfBirth() == null);

        return userResponse;  // Return the modified response
    }

    public UpdateProfileResponse updateMyInfo(UpdateProfileRequest request) {
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        if(!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new AppException(ErrorCode.PASSWORD_NOT_MATCH);
        }

        if (!request.getDateOfBirth().equals(user.getDateOfBirth())) {
            int elementId = elementCalculationService
                    .calculateElementId(request.getDateOfBirth());
            Element element = elementRepo.findById(elementId)
                    .orElseThrow(()-> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
            user.setElement(element);
        }
        userMapper.updateUserProfile(user, request);

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        return userMapper.toUpdateProfileResponse(userRepository.save(user));  // Return the modified response
    }

    public void createPassword( PasswordCreationRequest request) {
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        User user = userRepository.findByEmail(name).orElseThrow(
                () -> new AppException(ErrorCode.USER_NOT_EXIST));
        if(StringUtils.hasText(user.getPassword()))
            throw new AppException(ErrorCode.PASSWORD_EXIST);

        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);
    }


    public void createDOB( DOBCreationRequest request) {
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();

        User user = userRepository.findByEmail(name).orElseThrow(
                () -> new AppException(ErrorCode.USER_NOT_EXIST));

        int elementId = elementCalculationService
                .calculateElementId(request.getDateOfBirth());
        Element element = elementRepo.findById(elementId)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

        user.setDateOfBirth(request.getDateOfBirth());
        user.setElement(element);

        userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new AppException(ErrorCode.KOI_TYPE_NOT_EXIST));
    }


}

