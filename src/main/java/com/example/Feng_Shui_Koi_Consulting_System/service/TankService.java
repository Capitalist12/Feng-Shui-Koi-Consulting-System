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
     ElementMapper elementMapper;

    public TankResponse createTank(TankCreationRequest request){

        if(tankRepo.existsByShape(request.getShape()))
            throw new AppException(ErrorCode.TANK_EXISTED);
        Tank tank = new Tank();
        tank.setTankId(generateTankID());
        tank.setShape(request.getShape());
        tank.setImageURL(request.getImageURL());

        ElementResponse elementResponse = new ElementResponse();
        if (request.getElement() != null) {
            var element = elementRepo.findByElementName(request.getElement())
                    .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
            tank.setElementTank(element);
            elementResponse = elementMapper
                    .toElementResponse(element);
        }
        tankRepo.save(tank);

        return TankResponse.builder()
                .tankId(tank.getTankId())
                .shape(tank.getShape())
                .imageURL(tank.getImageURL())
                .elementTank(elementResponse)
                .build();

    }

    public List<TankResponse> getTank()
    {
        return tankRepo.findAll().stream().map(tank -> {
            ElementResponse elementResponse = elementMapper
                    .toElementResponse(tank.getElementTank());
            return TankResponse.builder()
                    .tankId(tank.getTankId())
                    .shape(tank.getShape())
                    .imageURL(tank.getImageURL())
                    .elementTank(elementResponse)
                    .build();
        }).collect(Collectors.toList());
    }

    public TankResponse getTankByID(String id){
        Tank tank =  tankRepo.findById(id).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));

        ElementResponse elementResponse = elementMapper
                .toElementResponse(tank.getElementTank());
        return TankResponse.builder()
                .tankId(tank.getTankId())
                .shape(tank.getShape())
                .imageURL(tank.getImageURL())
                .elementTank(elementResponse)
                .build();

    }

    public TankResponse updateTank(String tankId, TankUpdateRequest request){
        Tank tank = tankRepo.findById(tankId).orElseThrow(()
                -> new AppException(ErrorCode.TANK_NOT_FOUND));
        tank.setShape(request.getShape());
        tank.setImageURL(request.getImageURL());

        ElementResponse elementResponse = new ElementResponse();
        if (request.getElement() != null) {
            var element = elementRepo.findByElementName(request.getElement())
                    .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
            tank.setElementTank(element);
            elementResponse = elementMapper
                    .toElementResponse(element);
        }
        tankRepo.save(tank);

        return TankResponse.builder()
                .tankId(tank.getTankId())
                .shape(tank.getShape())
                .imageURL(tank.getImageURL())
                .elementTank(elementResponse)
                .build();
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
