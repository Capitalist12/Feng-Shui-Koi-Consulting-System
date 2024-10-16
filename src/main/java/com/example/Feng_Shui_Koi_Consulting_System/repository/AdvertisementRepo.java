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
    //    @Query("SELECT ad FROM Advertisement ad JOIN ad.category c WHERE c.categoryName = :categoryName")
//    List<Advertisement> findByCategory(@Param("categoryName") String categoryName);
//    @Query("SELECT ad FROM Advertisement ad JOIN ad.user u WHERE u.username = :username")
//    List<Advertisement> findByUser(@Param("username") String userId);
//    @Query("SELECT ad FROM Advertisement ad JOIN ad.element e WHERE e.elementName = :elementName")
//    List<Advertisement> findByElement(@Param("elementName") String elementName);
    @Query("SELECT ad FROM Advertisement ad " +
            "JOIN ad.category c " +
            "JOIN ad.user u " +
            "JOIN ad.element e " +
            "WHERE (:categoryName IS NULL OR :categoryName = '' OR c.categoryName = :categoryName) " +
            "AND (:username IS NULL OR :username = '' OR u.username = :username) " +
            "AND (:elementName IS NULL OR :elementName = '' OR e.elementName = :elementName)")
    List<Advertisement> filterAdvertisements(
            @Param("categoryName") String categoryName,
            @Param("username") String username,
            @Param("elementName") String elementName);

    boolean existsByAdID(String adID);

    Optional<Advertisement> findByTitle(String title);

    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Verified'")
    List<Advertisement> findAds();
}
