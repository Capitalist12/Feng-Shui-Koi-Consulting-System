package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.CategoryRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.CategoryResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    Category toCategory(CategoryRequest request);
    CategoryResponse toCategoryResponse(Category category);
    void updateCategory(@MappingTarget Category category, CategoryRequest request);
}
