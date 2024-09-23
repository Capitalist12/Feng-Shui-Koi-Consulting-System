package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiElement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ElementRepo extends JpaRepository<KoiElement, String> {
}
