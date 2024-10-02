package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.service.EmailService;
import com.example.Feng_Shui_Koi_Consulting_System.service.UserService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
     UserService userService;
     EmailService emailService;

    @PostMapping
    ApiResponse<UserResponse> createUser(@RequestBody @Valid UserCreationRequest request){
        UserResponse userResponse = userService.createUser(request);
        try {
            emailService.sendEmail(
                    request.getEmail().trim(),
                    "Welcome " + request.getUsername() + "!\nYour password is: " + request.getPassword(),
                    "Account Creation Successful"
            );
        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
        }
        return ApiResponse.<UserResponse>builder()
                .result(userResponse)
                .build();
    }

    @GetMapping
    ApiResponse<List<UserResponse>>getUsers(){
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        log.info("Username: {}", authentication.getName());
        authentication.getAuthorities().forEach(grantedAuthority -> log.info(grantedAuthority.getAuthority()));
        return ApiResponse.<List<UserResponse>>builder()
                .result(userService.getUsers())
                .build();
    }

    @GetMapping("/{userID}")
    User getUserByID(@PathVariable String userID){
        return userService.getUserByID(userID);
    }

    @PutMapping("/{userID}")
    ApiResponse<UserResponse> updateUser(@PathVariable String userID, @RequestBody @Valid  UserUpdateRequest request){
        return ApiResponse.<UserResponse>builder()
                .result(userService.updateUser(userID,request))
                .build();
    }

    @DeleteMapping("/{userID}")
    String deleteUser(@PathVariable String userID){
        userService.deleteUser(userID);
        return "User has been Deleted!";
    }
}
