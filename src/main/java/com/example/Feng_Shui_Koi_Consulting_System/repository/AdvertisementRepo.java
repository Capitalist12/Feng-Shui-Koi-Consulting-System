package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdvertisementRepo extends JpaRepository<Advertisement, String> {
    boolean existsByAdID(String adID);
    Optional<Advertisement> findByTitle(String title);
//    @Query("SELECT ad FROM Advertisement ad JOIN ad.CategoryID c WHERE c.categoryId = :categoryID")
//    List<Advertisement> findByCategoryID(@Param("categoryID") String categoryID);
}
