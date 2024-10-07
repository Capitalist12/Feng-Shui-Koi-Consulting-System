package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KTResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiTypesResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiTypes;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface KoiTypeMapper {
    KoiTypes toKoiType(KoiTypeRequest request);
    KoiTypesResponse toKoiTypeResponse(KoiTypes koiTypes);
    void updateKoiType(@MappingTarget KoiTypes koiTypes, KoiTypeRequest request);
    KTResponse toKTResponse(KoiTypes koiTypes);
}
