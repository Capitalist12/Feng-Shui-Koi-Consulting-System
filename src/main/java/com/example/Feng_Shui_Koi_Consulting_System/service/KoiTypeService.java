package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiTypesResponse;
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

    public KoiTypesResponse createKoiType(KoiTypeRequest request) {

        if (koiTypeRepo.existsByTypeName(request.getTypeName()))
            throw new AppException(ErrorCode.USER_EXIST);

        KoiTypes koiTypes = koiTypeMapper.toKoiType(request);
        return koiTypeMapper.toKoiTypeResponse(koiTypeRepo.save(koiTypes));
    }


    //@PreAuthorize("hasRole('ADMIN')")
    public List<KoiTypesResponse> getKoiTypes(){
        return koiTypeRepo.findAll().stream()
                .map(koiTypeMapper :: toKoiTypeResponse).collect(Collectors.toList());
    }



    public void deleteKoiType(String KoiTypeId){
        koiTypeRepo.deleteById(KoiTypeId);
    }
}
