package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ElementRepo extends JpaRepository<Element, Integer> {

    @Query("SELECT e FROM Element e WHERE e.elementName IN :elementNames")
    List<Element> findByElementNameIn(@Param("elementNames") Set<String> elementName);

    Optional<Element> findByElementName(String elementName);

    @Query("SELECT e FROM Element e WHERE e.color LIKE %:color%")
    Optional<Element> findByColor(@Param("color") String color);
}
