package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<Category, String> {
    boolean existsByCategoryName(String categoryName);  // Fix: exists instead of exist
    Optional<Category> findByCategoryName(String categoryName);
}
