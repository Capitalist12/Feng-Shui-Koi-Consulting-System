package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.UserCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(UserCreationRequest request) {
        User user = new User();
        user.setUserID(generateUserID()); // Implement this method to generate a unique ID
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setEmail(request.getEmail());
        user.setDateOfBirth(request.getDob());
        user.setElementID(request.getElementID());
        user.setRoleID(3); // Default to 3 as per your original code
        user.setImageID(null);
        user.setPlanID(null);
        user.setStatus(true); // Set to true for active users
        user.setDeleteStatus(false); // Set to false for non-deleted users

        return userRepository.save(user);
    }

    private String generateUserID() {
        // Implement a method to generate a unique user ID of length 10
        return "U" + String.format("%09d", System.nanoTime() % 1000000000);
    }
}
