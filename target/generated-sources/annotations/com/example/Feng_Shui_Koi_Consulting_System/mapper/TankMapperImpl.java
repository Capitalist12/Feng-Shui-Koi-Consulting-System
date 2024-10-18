package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.TankUpdateRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.TankResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.4 (Oracle Corporation)"
)
@Component
public class TankMapperImpl implements TankMapper {

    @Override
    public Tank toTank(TankCreationRequest request, ElementRepo elementRepo) {
        if ( request == null ) {
            return null;
        }

        Tank.TankBuilder tank = Tank.builder();

        tank.elementTank( mapToElement( request.getElement(), elementRepo ) );
        tank.shape( request.getShape() );
        tank.imageURL( request.getImageURL() );

        return tank.build();
    }

    @Override
    public TankResponse toTankResponse(Tank tank) {
        if ( tank == null ) {
            return null;
        }

        TankResponse.TankResponseBuilder tankResponse = TankResponse.builder();

        tankResponse.elementTank( mapToElementResponse( tank.getElementTank() ) );
        tankResponse.tankId( tank.getTankId() );
        tankResponse.shape( tank.getShape() );
        tankResponse.imageURL( tank.getImageURL() );

        return tankResponse.build();
    }

    @Override
    public void updateTank(Tank tank, TankUpdateRequest request, ElementRepo elementRepo) {
        if ( request == null ) {
            return;
        }

        tank.setElementTank( mapToElement( request.getElement(), elementRepo ) );
        tank.setShape( request.getShape() );
        tank.setImageURL( request.getImageURL() );
    }
}
