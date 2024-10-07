package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FishRepo extends JpaRepository<KoiFish, String> {
    boolean existsByName(String fishName);
    @Query("SELECT kf FROM KoiFish kf JOIN kf.elements e WHERE e.elementId = :elementID")
    List<KoiFish> findByElementID(@Param("elementID") Integer elementID);
    @Query("SELECT kf FROM KoiFish kf JOIN kf.elements e WHERE e.elementId = :elementId OR e.elementName = :generation")
    List<KoiFish> findByElementIDOrGeneration(@Param("elementId") Integer elementId, @Param("generation") String generation);
}
