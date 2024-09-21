package com.example.Feng_Shui_Koi_Consulting_System.services;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repositories.FishRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FishService {
    @Autowired
    private FishRepo fishRepo;

    public KoiFish createFish(FishCreationRequest request){
        KoiFish fish = new KoiFish();

        if(fishRepo.existsByName(request.getName()))
            throw new AppException(ErrorCode.FISH_EXISTED);
        else {
            fish.setId(generateKoiID());
            fish.setName(request.getName());
            fish.setSize(request.getSize());
            fish.setWeight(request.getWeight());
            fish.setColor(request.getColor());
            fish.setDescription(request.getDescription());
            fish.setImageId(request.getImageId());
            fish.setKoiTypeId(request.getKoiTypeId());

            return fishRepo.save(fish);
        }
    }

    public List<KoiFish> getFish(){
        return fishRepo.findAll();
    }

    public KoiFish getFish(String id){
        return fishRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.FISH_NOT_FOUND));
    }

    public KoiFish updateFish(String fishId,FishUpdateRequest request){
        KoiFish fish = fishRepo.findById(fishId).orElseThrow(()
                        -> new AppException(ErrorCode.FISH_NOT_FOUND));

        fish.setName(request.getName());
        fish.setSize(request.getSize());
        fish.setWeight(request.getWeight());
        fish.setColor(request.getColor());
        fish.setDescription(request.getDescription());
        fish.setImageId(request.getImageId());
        fish.setKoiTypeId(request.getKoiTypeId());

        return fishRepo.save(fish);
    }

    public void deleteFish(String fishId){
        KoiFish fish = fishRepo.findById(fishId).orElseThrow(()
                -> new AppException(ErrorCode.FISH_NOT_FOUND));
        fishRepo.deleteById(fishId);
    }

    public String generateKoiID(){
        return "KF" + String.format("%05d", System.nanoTime() % 100000);
    }
}
