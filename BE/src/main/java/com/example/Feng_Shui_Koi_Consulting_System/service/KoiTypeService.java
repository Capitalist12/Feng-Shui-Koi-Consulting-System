package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.fish.KTResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiTypes;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.KoiTypeMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.KoiTypeRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Service
public class KoiTypeService {
    KoiTypeRepo koiTypeRepo;
    KoiTypeMapper koiTypeMapper;

    private static final String FISHTYPE_ID_PREFIX = "KT";
    private final SecureRandom secureRandom = new SecureRandom();

    //Method to add koi type in data
    public KTResponse createKoiType(KoiTypeRequest request) {

        if (koiTypeRepo.existsByTypeName(request.getTypeName()))
            throw new AppException(ErrorCode.KOI_TYPE_EXIST);

        KoiTypes koiTypes = koiTypeMapper.toKoiType(request);
        koiTypes.setKoiTypeId(generateKoiTypeID());
        //use mapstruct to convert to response
        return koiTypeMapper.toKTResponse(koiTypeRepo.save(koiTypes));
    }


//Method get list of koi types
    public List<KTResponse> getKoiTypes(){
        return koiTypeRepo.findAll().stream()
                .map(koiTypeMapper :: toKTResponse).collect(Collectors.toList());
    }

//Method to update information of koi types
    public KTResponse updateKoiType(String koiTypeId ,KoiTypeRequest request) {

        KoiTypes koiTypes = koiTypeRepo.findById(koiTypeId)
                .orElseThrow(() -> new AppException(ErrorCode.KOI_TYPE_NOT_EXIST));
        //use mapstruct to update
        koiTypeMapper.updateKoiType(koiTypes, request);
        //use mapstruct to convert to response
        return koiTypeMapper.toKTResponse(koiTypeRepo.save(koiTypes));
    }
//Method find koi type by name
    public KoiTypes findByTypeName(String typeName) {
        return koiTypeRepo.findByTypeName(typeName)
                .orElseThrow(() -> new AppException(ErrorCode.KOI_TYPE_NOT_EXIST));
    }
//Method to delete koi type
    public void deleteKoiType(String koiTypeId){
        koiTypeRepo.deleteById(koiTypeId);
    }

    //Method to auto generate koi type ID
    public String generateKoiTypeID(){
        String fishTypeID;
        int maxAttempts = 10; // Prevent infinite loop
        int attempts = 0;

        do {
            // Generate a random 9-digit number
            int randomNum = secureRandom.nextInt(900000000) + 100000000; // Ensures 9 digits
            fishTypeID = FISHTYPE_ID_PREFIX + randomNum;

            attempts++;

            if (attempts >= maxAttempts) {
                throw new AppException(ErrorCode.UNABLE_TO_GENERATE_UNIQUE_ID);
            }
        } while (koiTypeRepo.existsById(fishTypeID));

        return fishTypeID;
    }


}
