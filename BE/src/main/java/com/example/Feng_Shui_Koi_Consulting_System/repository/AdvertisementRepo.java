package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface AdvertisementRepo extends JpaRepository<Advertisement, String> {
    //Get Ad by Filter of category, username and element
    @Query("SELECT ad FROM Advertisement ad " +
            "JOIN ad.category c " +
            "JOIN ad.user u " +
            "JOIN ad.element e " +
            "WHERE (:categoryName IS NULL OR :categoryName = '' OR c.categoryName = :categoryName) " +
            "AND (:username IS NULL OR :username = '' OR u.username = :username) " +
            "AND (:elementName IS NULL OR :elementName = '' OR e.elementName = :elementName)" +
            "AND ad.status = 'Verified'")
    List<Advertisement> filterAdvertisements(
            @Param("categoryName") String categoryName,
            @Param("username") String username,
            @Param("elementName") String elementName);

    //find ad by id
    boolean existsByAdID(String adID);

//    Optional<Advertisement> findByTitle(String title);

    //find verified ads
    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Verified'")
    List<Advertisement> findAdsVerified();

    //find user's ads
    @Query("SELECT ad FROM Advertisement ad WHERE ad.user.id = :userID")
    List<Advertisement> findAdsOfUser(@Param("userID") String userID);

    //find all pending ads
    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Pending'")
    List<Advertisement> findAdsPending();

    //find rejected ads
    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected'")
    List<Advertisement> findAdsRejected();

    //Get user's rejected ads
    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected' AND ad.user.id = :userID")
    List<Advertisement> findAdsRejectedOfUser(@Param("userID") String userID);

    //Get ads by user's element
    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Verified' AND ad.element.elementId = :elementId")
    List<Advertisement> findAdsByUserElement(@Param("elementId") Integer elementId);

    //Find ads older than 5 minutes
    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected' AND ad.createdDate <= :fiveMinutesAgo")
    List<Advertisement> findRejectedAdvertisementsOlderThan5Mins(@Param("fiveMinutesAgo") LocalDateTime fiveMinutesAgo);

    //Find ads older than 7 days
    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected' AND ad.createdDate <= :sevenDaysAgo")
    List<Advertisement> findRejectedAdvertisementsOlderThan7Days(@Param("sevenDaysAgo") LocalDateTime sevenDaysAgo);
}
