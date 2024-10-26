package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.tank.TankResponse;
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

import java.security.SecureRandom;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TankService {
     TankRepo tankRepo;
     TankMapper tankMapper;
     ElementRepo elementRepo;

    //Constant for generating UserID
    private static final String ID_PREFIX = "TA";
    private final SecureRandom secureRandom = new SecureRandom();

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
        String tankID;
        int maxAttempts = 10; // Prevent infinite loop
        int attempts = 0;

        do {
            // Generate a random 9-digit number
            int randomNum = secureRandom.nextInt(900000000) + 100000000; // Ensures 9 digits
            tankID = ID_PREFIX + randomNum;

            attempts++;

            if (attempts >= maxAttempts) {
                throw new AppException(ErrorCode.UNABLE_TO_GENERATE_UNIQUE_ID);
            }
        } while (tankRepo.existsById(tankID));

        return tankID;
    }
}
