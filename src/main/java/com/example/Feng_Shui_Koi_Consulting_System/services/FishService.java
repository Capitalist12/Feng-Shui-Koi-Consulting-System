package com.example.Feng_Shui_Koi_Consulting_System.services;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
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

        if(fishRepo.existsByFishName(request.getName()))
            throw new RuntimeException("Fish has already existed");

        fish.setName(request.getName());
        fish.setColor(request.getColor());
        fish.setSize(request.getSize());
        fish.setWeight(request.getWeight());
        fish.setTypeId(request.getTypeId());
        fish.setDescription(request.getDescription());
        fish.setGender(request.getGender());

        return fishRepo.save(fish);
    }

    public List<KoiFish> getFish(){
        return fishRepo.findAll();
    }

    public KoiFish getFish(String id){
        return fishRepo.findById(id).orElseThrow(() -> new RuntimeException("Fish not found"));
    }

    public KoiFish updateFish(String fishId,FishUpdateRequest request){
        KoiFish fish = getFish(fishId);

        fish.setName(request.getName());
        fish.setColor(request.getColor());
        fish.setSize(request.getSize());
        fish.setWeight(request.getWeight());
        fish.setTypeId(request.getTypeId());
        fish.setDescription(request.getDescription());
        fish.setGender(request.getGender());

        return fishRepo.save(fish);
    }

    public void deleteFish(String fishId){
        fishRepo.deleteById(fishId);
    }
}
