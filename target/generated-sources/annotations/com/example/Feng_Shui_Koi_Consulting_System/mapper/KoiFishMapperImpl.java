package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.FishUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.KoiFishResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Koi_Image;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.service.KoiTypeService;
import java.util.LinkedHashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.4 (Oracle Corporation)"
)
@Component
public class KoiFishMapperImpl implements KoiFishMapper {

    @Override
    public KoiFish toKoiFish(FishCreationRequest request, KoiTypeService koiTypeService, ElementRepo elementRepo) {
        if ( request == null ) {
            return null;
        }

        KoiFish.KoiFishBuilder koiFish = KoiFish.builder();

        koiFish.koiTypes( mapToKoiType( request.getKoiTypeName(), koiTypeService ) );
        koiFish.elements( mapToElement( request.getElements(), elementRepo ) );
        koiFish.name( request.getName() );
        koiFish.size( request.getSize() );
        koiFish.weight( request.getWeight() );
        koiFish.color( request.getColor() );
        koiFish.description( request.getDescription() );

        return koiFish.build();
    }

    @Override
    public void updateKoiFish(KoiFish koiFish, FishUpdateRequest request, KoiTypeService koiTypeService, ElementRepo elementRepo) {
        if ( request == null ) {
            return;
        }

        koiFish.setKoiTypes( mapToKoiType( request.getKoiTypeName(), koiTypeService ) );
        if ( koiFish.getElements() != null ) {
            Set<Element> set = mapToElement( request.getElements(), elementRepo );
            if ( set != null ) {
                koiFish.getElements().clear();
                koiFish.getElements().addAll( set );
            }
            else {
                koiFish.setElements( null );
            }
        }
        else {
            Set<Element> set = mapToElement( request.getElements(), elementRepo );
            if ( set != null ) {
                koiFish.setElements( set );
            }
        }
        koiFish.setName( request.getName() );
        koiFish.setSize( request.getSize() );
        koiFish.setWeight( request.getWeight() );
        koiFish.setColor( request.getColor() );
        koiFish.setDescription( request.getDescription() );
    }

    @Override
    public KoiFishResponse toKoiFishRespon(KoiFish koiFish) {
        if ( koiFish == null ) {
            return null;
        }

        KoiFishResponse.KoiFishResponseBuilder koiFishResponse = KoiFishResponse.builder();

        koiFishResponse.koiTypes( mapToKoiTypesResponse( koiFish.getKoiTypes() ) );
        koiFishResponse.elements( mapToElementResponse( koiFish.getElements() ) );
        koiFishResponse.id( koiFish.getId() );
        koiFishResponse.name( koiFish.getName() );
        koiFishResponse.size( koiFish.getSize() );
        koiFishResponse.weight( koiFish.getWeight() );
        koiFishResponse.color( koiFish.getColor() );
        koiFishResponse.description( koiFish.getDescription() );
        Set<Koi_Image> set1 = koiFish.getImagesFish();
        if ( set1 != null ) {
            koiFishResponse.imagesFish( new LinkedHashSet<Koi_Image>( set1 ) );
        }

        return koiFishResponse.build();
    }
}
