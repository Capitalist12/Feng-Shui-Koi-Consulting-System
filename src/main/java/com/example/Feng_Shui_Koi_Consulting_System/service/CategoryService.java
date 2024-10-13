package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CategoryRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.CategoryResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KTResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Category;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiTypes;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.CategoryMapper;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.KoiTypeMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.CategoryRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.KoiTypeRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CategoryService {
    CategoryRepo categoryRepo;
    CategoryMapper categoryMapper;

    public CategoryResponse createCategory(CategoryRequest request) {

        if (categoryRepo.existsByCategoryName(request.getCategoryName()))
            throw new AppException(ErrorCode.CATEGORY_NOT_EXIST);

        Category category = categoryMapper.toCategory(request);
        category.setCategoryID(generateCategoryID());
        return categoryMapper.toCategoryResponse(categoryRepo.save(category));
    }

    //@PreAuthorize("hasRole('ADMIN')")
    public List<CategoryResponse> getCategories(){
        return categoryRepo.findAll().stream()
                .map(categoryMapper :: toCategoryResponse).collect(Collectors.toList());
    }

    public CategoryResponse updateCategory(String categoryID ,CategoryRequest request) {

        Category category = categoryRepo.findById(categoryID)
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_EXIST));
        categoryMapper.updateCategory(category,request);
        return categoryMapper.toCategoryResponse(categoryRepo.save(category));
    }

    public Category findByCategoryName(String categoryName) {
        return categoryRepo.findByCategoryName(categoryName)
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_EXIST));
    }

    public void deleteCategory(String categoryID){
        categoryRepo.deleteById(categoryID);
    }

    public String generateCategoryID(){
        return "CAT" + String.format("%05d", System.nanoTime() % 100000);
    }
}
