package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.ElementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.TankMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TankRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TankService {
     TankRepo tankRepo;
     TankMapper tankMapper;
     ElementRepo elementRepo;

    public TankResponse createTank(TankCreationRequest request){

        if(tankRepo.existsByShape(request.getShape()))
            throw new AppException(ErrorCode.TANK_EXISTED);
        Tank tank = tankMapper.toTank(request,
                elementRepo);
        tank.setTankId(generateTankID());
        return tankMapper.toTankResponse(tankRepo.save(tank));
    }

    public List<TankResponse> getTank()
    {
        return tankRepo.findAll().stream().map(
                tankMapper :: toTankResponse).collect(Collectors.toList());
    }

    public TankResponse getTankByID(String id){
        Tank tank =  tankRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));
        return tankMapper.toTankResponse(tank);
    }

    public TankResponse updateTank(String tankId, TankUpdateRequest request){
        Tank tank = tankRepo.findById(tankId).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));
        tankMapper.updateTank(tank, request,
                elementRepo);
        return tankMapper.toTankResponse(tankRepo.save(tank));
    }

    public void deleteTank(String tankId){
        Tank tank = tankRepo.findById(tankId).orElseThrow(
                () -> new AppException(ErrorCode.TANK_NOT_FOUND));
        tankRepo.deleteById(tankId);
    }

    public String generateTankID(){
        return "TA" + String.format("%05d", System.nanoTime() % 1000);
    }
}
