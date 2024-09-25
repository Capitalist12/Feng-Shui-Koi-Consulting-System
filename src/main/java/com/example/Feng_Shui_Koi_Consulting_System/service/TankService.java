package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.TankMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TankRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;
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
        Tank tank = new Tank();
        tank.setTankId(generateTankID());
        tank.setShape(request.getShape());
        tank.setImageURL(request.getImageURL());

        if (request.getElement() != null && request.getElement().isEmpty()) {

            var element = elementRepo.findByElementName(request.getElement())
                    .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
            tank.setElementTank(element);
        }
        return tankMapper.toTankResponse(tankRepo.save(tank));
    }

    public List<TankResponse> getTank()
    {
        return tankRepo.findAll().stream().map(tankMapper :: toTankResponse)
                .collect(Collectors.toList());
    }

    public Tank getTank(String id){
        return tankRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));
    }

    public TankResponse updateTank(String tankId, TankUpdateRequest request){
        Tank tank = tankRepo.findById(tankId).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));


        if (request.getElement() != null && request.getElement().isEmpty()) {

            var element = elementRepo.findByElementName(request.getElement())
                    .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
            tank.setElementTank(element);
        }

        tankMapper.updateTank(tank, request);
        return tankMapper.toTankResponse(tankRepo.save(tank));
    }

    public void deleteFish(String tankId){
        Tank tank = tankRepo.findById(tankId).orElseThrow(
                () -> new AppException(ErrorCode.TANK_NOT_FOUND));
        tankRepo.deleteById(tankId);
    }

    public String generateTankID(){
        return "TA" + String.format("%05d", System.nanoTime() % 100000);
    }
}
