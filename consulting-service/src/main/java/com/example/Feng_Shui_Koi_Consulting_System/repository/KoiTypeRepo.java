package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KoiTypeRepo extends JpaRepository<KoiTypes, String> {
    boolean existsByTypeName(String typeName);
    Optional<KoiTypes> findByTypeName(String typeName);



}
