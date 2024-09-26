package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TankRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TankService {
    @Autowired
    private TankRepo tankRepo;

    public Tank createTank(TankCreationRequest request){
        Tank tank = new Tank();

        if(tankRepo.existsByShape(request.getShape()))
            throw new AppException(ErrorCode.TANK_EXISTED);

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
        return tankRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));
    }

    public Tank updateTank(String tankId, TankUpdateRequest request){
        Tank tank = tankRepo.findById(tankId).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));

        tank.setShape(request.getShape());
        tank.setElementId(request.getElementId());
        tank.setImageId(request.getImageId());

        return tankRepo.save(tank);
    }

    public void deleteTank(String tankId){
        Tank tank = tankRepo.findById(tankId).orElseThrow(
                () -> new AppException(ErrorCode.TANK_NOT_FOUND));
        tankRepo.deleteById(tankId);
    }

    public String generateTankID(){
        return "TA" + String.format("%05d", System.nanoTime() % 100000);
    }
}
