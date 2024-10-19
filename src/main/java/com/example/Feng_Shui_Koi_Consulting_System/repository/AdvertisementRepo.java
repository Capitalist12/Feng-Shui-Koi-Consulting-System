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

    boolean existsByAdID(String adID);

    Optional<Advertisement> findByTitle(String title);

    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Verified'")
    List<Advertisement> findAdsVerified();

    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Pending'")
    List<Advertisement> findAdsPending();

    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected'")
    List<Advertisement> findAdsRejected();

//    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected' AND ad.createdDate <= :thirtyDaysAgo")
//    List<Advertisement> findRejectedAdvertisementsOlderThan(@Param("thirtyDaysAgo") Date thirtyDaysAgo);

    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected' AND ad.createdDate < :thirtySecondsAgo")
    List<Advertisement> findRejectedAdvertisementsOlderThan(@Param("thirtySecondsAgo") LocalDateTime thirtySecondsAgo);

//    @Query("SELECT ad FROM Advertisement ad WHERE ad.status = 'Rejected' AND ad.createdDate < :sevenDaysAgo")
//    List<Advertisement> findRejectedAdvertisementsOlderThan(@Param("sevenDaysAgo") LocalDateTime sevenDaysAgo);
}
