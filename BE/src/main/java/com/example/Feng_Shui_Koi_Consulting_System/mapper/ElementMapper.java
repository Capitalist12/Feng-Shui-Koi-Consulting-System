package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.user.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ElementMapper {
    ElementResponse toElementResponse(Element element);
}
