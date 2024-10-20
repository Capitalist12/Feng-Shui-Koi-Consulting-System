package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import java.util.List;

@Repository
public interface TankRepo extends JpaRepository<Tank, String> {
    boolean existsByShape(String shape);
    Optional<Tank> findByShape(String shape);
    List<Tank> findByElementTank_ElementId(Integer elementID);
}
