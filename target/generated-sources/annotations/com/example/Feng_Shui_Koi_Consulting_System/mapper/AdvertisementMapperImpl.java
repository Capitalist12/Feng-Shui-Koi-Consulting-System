package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.advertisement.AdvertisementUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Ads_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Advertisement;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.service.CategoryService;
import java.util.LinkedHashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.4 (Oracle Corporation)"
)
@Component
public class AdvertisementMapperImpl implements AdvertisementMapper {

    @Override
    public Advertisement toAdvertisement(AdvertisementCreationRequest request, ElementRepo elementRepo, CategoryService categoryService) {
        if ( request == null ) {
            return null;
        }

        Advertisement.AdvertisementBuilder advertisement = Advertisement.builder();

        advertisement.element( mapToElement( request.getElement(), elementRepo ) );
        advertisement.category( mapToCategory( request.getCategoryName(), categoryService ) );
        advertisement.title( request.getTitle() );
        advertisement.description( request.getDescription() );
        advertisement.price( request.getPrice() );

        return advertisement.build();
    }

    @Override
    public void updateAdvertisement(Advertisement advertisement, AdvertisementUpdateRequest request, ElementRepo elementRepo, CategoryService categoryService) {
        if ( request == null ) {
            return;
        }

        advertisement.setElement( mapToElement( request.getElement(), elementRepo ) );
        advertisement.setCategory( mapToCategory( request.getCategoryName(), categoryService ) );
        advertisement.setTitle( request.getTitle() );
        advertisement.setDescription( request.getDescription() );
        advertisement.setPrice( request.getPrice() );
    }

    @Override
    public AdvertisementResponse toAdvertisementResponse(Advertisement advertisement) {
        if ( advertisement == null ) {
            return null;
        }

        AdvertisementResponse.AdvertisementResponseBuilder advertisementResponse = AdvertisementResponse.builder();

        advertisementResponse.element( mapToElementName( advertisement.getElement() ) );
        advertisementResponse.category( mapToCategoryResponse( advertisement.getCategory() ) );
        advertisementResponse.user( mapToUserName( advertisement.getUser() ) );
        Set<Ads_Image> set = advertisement.getImagesAd();
        if ( set != null ) {
            advertisementResponse.imagesAd( new LinkedHashSet<Ads_Image>( set ) );
        }
        advertisementResponse.adID( advertisement.getAdID() );
        advertisementResponse.title( advertisement.getTitle() );
        advertisementResponse.description( advertisement.getDescription() );
        advertisementResponse.price( advertisement.getPrice() );
        advertisementResponse.status( advertisement.getStatus() );
        advertisementResponse.createdDate( advertisement.getCreatedDate() );

        return advertisementResponse.build();
    }
}
