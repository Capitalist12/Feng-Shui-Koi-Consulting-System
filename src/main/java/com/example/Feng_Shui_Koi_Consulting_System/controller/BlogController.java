package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.BlogCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.BlogResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.UserResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.BlogService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/blog")
public class BlogController {
    BlogService blogService;

    @PostMapping
    ApiResponse<BlogResponse> createBlog(@RequestBody BlogCreationRequest request){
        return ApiResponse.<BlogResponse>builder()
                .result(blogService.createBlog(request))
                .build();
    }

    @GetMapping
    ApiResponse<List<BlogResponse>> getAllBlogs(){
        return ApiResponse.<List<BlogResponse>>builder()
                .result(blogService.getListBlogs())
                .build();
    }

    @GetMapping("/{blogID}")
    ApiResponse<BlogResponse> getBlogById(@PathVariable("blogID") String blogID) {
        return ApiResponse.<BlogResponse>builder()
                .result(blogService.getBlogByID(blogID))
                .build();
    }
}
