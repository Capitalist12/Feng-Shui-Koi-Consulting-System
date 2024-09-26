package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiType;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.KoiTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {
    @Autowired
    private KoiTypeRepo koiTypeRepo;
    
    public KoiType createkoiType(KoiTypeCreationRequest request){
        KoiType koiType = new KoiType();

        if(koiTypeRepo.existsByName(request.getKoiTypeName()))
            throw new AppException(ErrorCode.TYPE_EXISTED);

        koiType.setKoiTypeName(request.getKoiTypeName());
        koiType.setDescription(request.getDescription());

        return koiTypeRepo.save(koiType);
    }

    public List<KoiType> getKoiType()
    {
        return koiTypeRepo.findAll();
    }

    public KoiType getkoiType(String id){
        return koiTypeRepo.findById(id).orElseThrow(
                () -> new AppException(ErrorCode.TYPE_NOT_FOUND));
    }

    public KoiType updatekoiType(String koiTypeId, KoiTypeUpdateRequest request){
        KoiType koiType = koiTypeRepo.findById(koiTypeId).orElseThrow(
                () -> new AppException(ErrorCode.TYPE_NOT_FOUND));

        koiType.setKoiTypeName(request.getKoiTypeName());
        koiType.setDescription(request.getDescription());

        return koiTypeRepo.save(koiType);
    }

    public void deleteType(String koiTypeId){
        KoiType koiType = koiTypeRepo.findById(koiTypeId).orElseThrow(
                () -> new AppException(ErrorCode.TYPE_NOT_FOUND));
        koiTypeRepo.deleteById(koiTypeId);
    }
}
