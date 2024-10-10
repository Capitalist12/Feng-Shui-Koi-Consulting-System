package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface AdvertisementMapper {
    Advertisement toAdvertisement(AdvertisementCreationRequest advertisement);

    AdvertisementResponse toAdvertisementResponse(Advertisement advertisement);

    void updateAdvertisement(@MappingTarget Advertisement advertisement, AdvertisementUpdateRequest request);
}
