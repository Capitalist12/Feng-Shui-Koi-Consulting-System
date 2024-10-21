package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.BlogRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.BlogResponse;
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

    @PostMapping("/create")
    ApiResponse<BlogResponse> createBlog(@RequestBody BlogRequest request){
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

    @GetMapping("{blogID}")
    ApiResponse<BlogResponse> getBlogById(@PathVariable("blogID") String blogID) {
        return ApiResponse.<BlogResponse>builder()
                .result(blogService.getBlogByID(blogID))
                .build();
    }

    @PutMapping("/{blogID}")
    ApiResponse<BlogResponse>updateBlog(@PathVariable String blogID, @RequestBody BlogRequest request){
        return ApiResponse.<BlogResponse>builder()
                .result(blogService.updateBlog(blogID,request))
                .build();
    }

    @DeleteMapping("/{blogID}")
    String deleteBlog(@PathVariable String blogID){
        blogService.deleteBlog(blogID);
        return "Blog has been deleted!";
    }
}
