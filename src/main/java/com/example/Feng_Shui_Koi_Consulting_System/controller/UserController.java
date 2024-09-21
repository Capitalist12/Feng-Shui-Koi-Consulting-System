package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/createusers")
    ApiResponse<User> createUser(@RequestBody @Valid UserCreationRequest request){
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.createUser(request));
        return apiResponse;
    }

    @GetMapping
    List<User> geUsers(){
        return userService.geUsers();
    }

    @GetMapping("/{userID}")
    User getUserByID(@PathVariable String userID){
        return userService.getUserByID(userID);
    }

    @PutMapping("/{userID}")
    ApiResponse<User> updateUser(@PathVariable String userID, @RequestBody @Valid  UserUpdateRequest request){
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.updateUser(userID,request));
        return apiResponse;
    }

    @DeleteMapping("/{userID}")
    String deleteUser(@PathVariable String userID){
        userService.deleteUser(userID);
        return "User has been Deleted!";
    }
}
