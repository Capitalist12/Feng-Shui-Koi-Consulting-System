package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.KoiTypeRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KTResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiTypesResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiTypes;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.4 (Oracle Corporation)"
)
@Component
public class KoiTypeMapperImpl implements KoiTypeMapper {

    @Override
    public KoiTypes toKoiType(KoiTypeRequest request) {
        if ( request == null ) {
            return null;
        }

        KoiTypes.KoiTypesBuilder koiTypes = KoiTypes.builder();

        koiTypes.typeName( request.getTypeName() );
        koiTypes.description( request.getDescription() );

        return koiTypes.build();
    }

    @Override
    public KoiTypesResponse toKoiTypeResponse(KoiTypes koiTypes) {
        if ( koiTypes == null ) {
            return null;
        }

        KoiTypesResponse.KoiTypesResponseBuilder koiTypesResponse = KoiTypesResponse.builder();

        koiTypesResponse.typeName( koiTypes.getTypeName() );
        koiTypesResponse.description( koiTypes.getDescription() );

        return koiTypesResponse.build();
    }

    @Override
    public void updateKoiType(KoiTypes koiTypes, KoiTypeRequest request) {
        if ( request == null ) {
            return;
        }

        koiTypes.setTypeName( request.getTypeName() );
        koiTypes.setDescription( request.getDescription() );
    }

    @Override
    public KTResponse toKTResponse(KoiTypes koiTypes) {
        if ( koiTypes == null ) {
            return null;
        }

        KTResponse.KTResponseBuilder kTResponse = KTResponse.builder();

        kTResponse.koiTypeId( koiTypes.getKoiTypeId() );
        kTResponse.typeName( koiTypes.getTypeName() );
        kTResponse.description( koiTypes.getDescription() );

        return kTResponse.build();
    }
}
