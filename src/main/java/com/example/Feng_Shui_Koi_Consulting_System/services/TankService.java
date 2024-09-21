package com.example.Feng_Shui_Koi_Consulting_System.services;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.repositories.TankRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TankService {
    @Autowired
    private TankRepo tankRepo;

    public Tank createTank(TankCreationRequest request){
        Tank tank = new Tank();

        tank.setTankId(generateTankID());
        tank.setShape(request.getShape());
        tank.setElementId(request.getElementId());
        tank.setImageId(request.getImageId());

        return tankRepo.save(tank);
    }

    public List<Tank> getTank()
    {
        return tankRepo.findAll();
    }

    public Tank getTank(String id){
        return tankRepo.findById(id).orElseThrow(() -> new RuntimeException("Tank not found"));
    }

    public Tank updateTank(String tankId, TankUpdateRequest request){
        Tank tank = getTank(tankId);

        tank.setShape(request.getShape());
        tank.setElementId(request.getElementId());
        tank.setImageId(request.getImageId());

        return tankRepo.save(tank);
    }

    public void deleteFish(String tankId){
        tankRepo.deleteById(tankId);
    }

    public String generateTankID(){
        return "TA" + String.format("%05d", System.nanoTime() % 100000);
    }
}
