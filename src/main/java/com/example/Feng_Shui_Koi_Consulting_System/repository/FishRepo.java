package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiElement;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface FishRepo extends JpaRepository<KoiFish, String> {
    boolean existsByName(String fishName);
}
