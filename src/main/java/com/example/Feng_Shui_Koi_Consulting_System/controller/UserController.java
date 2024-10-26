package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.authentication.PasswordCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.user.*;
import com.example.Feng_Shui_Koi_Consulting_System.service.UserService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    UserService userService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    ApiResponse<UserResponse> createUser(@RequestBody @Valid UserCreationRequest request){
        return ApiResponse.<UserResponse>builder()
                .result(userService.createUser(request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    ApiResponse<List<UserResponse>>geUsers(){
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        log.info("Username: {}", authentication.getName());
        authentication.getAuthorities().forEach(grantedAuthority -> log.info(grantedAuthority.getAuthority()));
        return ApiResponse.<List<UserResponse>>builder()
                .result(userService.geUsers())
                .build();
    }


    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{userID}")
    ApiResponse<UserResponse> getUserById(@PathVariable("userId") String userID) {
        return ApiResponse.<UserResponse>builder()
                .result(userService.getUserById(userID))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{userID}")
    ApiResponse<UserResponse> updateUser(@PathVariable String userID, @RequestBody @Valid UserUpdateRequest request){
        return ApiResponse.<UserResponse>builder()
                .result(userService.updateUser(userID,request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{userID}")
    String deleteUser(@PathVariable String userID){
        userService.deleteUser(userID);
        return "User has been Deleted!";
    }

    @PostMapping("/create-dob")
    ApiResponse<Void> createDOB(@RequestBody DOBCreationRequest request){
        userService.createDOB(request);
        return ApiResponse.<Void>builder()
                .message("Date of birth and element has been updated!")
                .build();
    }


    @PostMapping("/create-password")
    ApiResponse<Void> createPassword(@RequestBody @Valid PasswordCreationRequest request){
        userService.createPassword(request);
        return ApiResponse.<Void>builder()
                .message("Password has been created, you can use it to login now!")
                .build();
    }

    @GetMapping("/my-info")
    ApiResponse<UserResponse> getMyInfo() {
        return ApiResponse.<UserResponse>builder()
                .result(userService.getMyInfo())
                .build();
    }

    @PutMapping("/update-info")
    ApiResponse<UpdateProfileResponse> updateMyInfo(@RequestBody UpdateProfileRequest request) {
        return ApiResponse.<UpdateProfileResponse>builder()
                .result(userService.updateMyInfo(request))
                .build();
    }
}