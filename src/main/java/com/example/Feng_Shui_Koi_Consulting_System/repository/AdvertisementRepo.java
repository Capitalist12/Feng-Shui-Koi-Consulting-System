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
    @Query("SELECT ad FROM Advertisement ad JOIN ad.category c WHERE c.categoryID = :categoryID")
    List<Advertisement> findByCategoryID(@Param("categoryID") String categoryId);
    @Query("SELECT ad FROM Advertisement ad JOIN ad.user u WHERE u.userID = :userID")
    List<Advertisement> findByUserID(@Param("userID") String userId);
    @Query("SELECT ad FROM Advertisement ad JOIN ad.element e WHERE e.elementId = :elementID")
    List<Advertisement> findByElementID(@Param("elementID") String elementId);
    boolean existsByAdID(String adID);
    Optional<Advertisement> findByTitle(String title);

}
