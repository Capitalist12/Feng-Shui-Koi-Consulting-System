package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.CategoryRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.CategoryResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.CategoryService;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/category")
public class CategoryController {
    CategoryService categoryService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    ApiResponse<CategoryResponse> createCategory(@RequestBody CategoryRequest request){
        return ApiResponse.<CategoryResponse>builder()
                .result(categoryService.createCategory(request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    ApiResponse<List<CategoryResponse>>getCategory(){
        return ApiResponse.<List<CategoryResponse>>builder()
                .result(categoryService.getCategories())
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{categoryID}")
    ApiResponse<CategoryResponse> updateCategory(@PathVariable String categoryID, @RequestBody CategoryRequest request){
        return ApiResponse.<CategoryResponse>builder()
                .result(categoryService.updateCategory(categoryID, request))
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{categoryID}")
    String deleteUser(@PathVariable String categoryID){
        categoryService.deleteCategory(categoryID);
        return "Category has been Deleted!";
    }

}