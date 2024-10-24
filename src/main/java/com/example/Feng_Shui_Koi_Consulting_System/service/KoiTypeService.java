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

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Service
public class KoiTypeService {
    KoiTypeRepo koiTypeRepo;
    KoiTypeMapper koiTypeMapper;

    public KTResponse createKoiType(KoiTypeRequest request) {

        if (koiTypeRepo.existsByTypeName(request.getTypeName()))
            throw new AppException(ErrorCode.KOI_TYPE_EXIST);

        KoiTypes koiTypes = koiTypeMapper.toKoiType(request);
        koiTypes.setKoiTypeId(generateKoiTypeID());
        return koiTypeMapper.toKTResponse(koiTypeRepo.save(koiTypes));
    }


    //@PreAuthorize("hasRole('ADMIN')")
    public List<KTResponse> getKoiTypes(){
        return koiTypeRepo.findAll().stream()
                .map(koiTypeMapper :: toKTResponse).collect(Collectors.toList());
    }


    public KTResponse updateKoiType(String koiTypeId ,KoiTypeRequest request) {

        KoiTypes koiTypes = koiTypeRepo.findById(koiTypeId)
                .orElseThrow(() -> new AppException(ErrorCode.KOI_TYPE_NOT_EXIST));
        koiTypeMapper.updateKoiType(koiTypes, request);
        return koiTypeMapper.toKTResponse(koiTypeRepo.save(koiTypes));
    }

    public KoiTypes findByTypeName(String typeName) {
        return koiTypeRepo.findByTypeName(typeName)
                .orElseThrow(() -> new AppException(ErrorCode.KOI_TYPE_NOT_EXIST));
    }

    public void deleteKoiType(String koiTypeId){
        koiTypeRepo.deleteById(koiTypeId);
    }

    public String generateKoiTypeID(){
        return "KT" + String.format("%05d", System.nanoTime() % 100000);
    }

}
