package com.example.Feng_Shui_Koi_Consulting_System.mapper;

import com.example.Feng_Shui_Koi_Consulting_System.dto.user.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.4 (Oracle Corporation)"
)
@Component
public class ElementMapperImpl implements ElementMapper {

    @Override
    public ElementResponse toElementResponse(Element element) {
        if ( element == null ) {
            return null;
        }

        ElementResponse.ElementResponseBuilder elementResponse = ElementResponse.builder();

        elementResponse.elementId( element.getElementId() );
        elementResponse.elementName( element.getElementName() );
        elementResponse.description( element.getDescription() );
        elementResponse.quantity( element.getQuantity() );
        elementResponse.direction( element.getDirection() );
        elementResponse.value( element.getValue() );
        elementResponse.color( element.getColor() );
        elementResponse.generation( element.getGeneration() );
        elementResponse.inhibition( element.getInhibition() );

        return elementResponse.build();
    }
}
