package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KoiTypeRepo extends JpaRepository<KoiType, String> {
    boolean existsByName(String koiTypeName);
}
