package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.AdvertisementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.AdvertisementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.CategoryRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdvertisementService {
    AdvertisementRepo advertisementRepo;
    AdvertisementMapper advertisementMapper;
    ElementRepo elementRepo;
    UserRepository userRepository;
    CategoryRepo categoryRepo;

    public AdvertisementResponse createAdvertisement(AdvertisementCreationRequest request) {
        Advertisement advertisement = advertisementMapper
                .toAdvertisement(request, elementRepo, categoryRepo, userRepository);
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    public List<AdvertisementResponse> getListAdvertisements(){
        return advertisementRepo.findAll().stream()
                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
    }

    public List<AdvertisementResponse> getAdvertisementByCategory(String categoryID){
        return advertisementRepo.findByCategoryID(categoryID).stream()
                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
    }

    public List<AdvertisementResponse> getAdvertisementByUserID(String userID){
        return advertisementRepo.findByUserID(userID).stream()
                .map(advertisementMapper :: toAdvertisementResponse).collect(Collectors.toList());
    }

    public AdvertisementResponse updateAdvertisement(String adID, AdvertisementUpdateRequest request){
        Advertisement advertisement = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementMapper
                .updateAdvertisement(advertisement, request, elementRepo, categoryRepo, userRepository);
        return advertisementMapper.toAdvertisementResponse(advertisementRepo.save(advertisement));
    }

    public void deleteAdvertisement(String adID){
        Advertisement advertisement = advertisementRepo.findById(adID)
                .orElseThrow(() -> new AppException(ErrorCode.AD_NOT_EXIST));
        advertisementRepo.delete(advertisement);
    }
}
