package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ElementCalculationService {

    ElementRepo elementRepo;

    public String calculateElementName(LocalDate dateOfBirth) {
        if (dateOfBirth == null) {
            throw new IllegalArgumentException("Date of birth cannot be null");
        }
        int birthYear = dateOfBirth.getYear();
        int elementId = calculateElementId(dateOfBirth);
            // Get the element name using the calculated element ID
        Optional<Element> element = elementRepo.findById(elementId);
        return element.map(Element::getElementName).orElse("Element not found");
    }

    public int calculateElementId(LocalDate dateOfBirth) {
        if (dateOfBirth == null) {
            throw new IllegalArgumentException("Date of birth cannot be null");
        }

        int birthYear = dateOfBirth.getYear();

        try {
            int canNumber = calculateCanNumber(birthYear);
            int chiNumber = calculateChiNumber(birthYear);
            int elementId = canNumber + chiNumber;

            if(elementId>5){
                elementId = elementId -5 ;
            }
            return elementId;
        } catch (Exception e) {
            throw new RuntimeException("Error calculating element ID", e);
        }
    }


    private int calculateCanNumber(int birthYear) {
        int canTableNumber = birthYear % 10;
        if (canTableNumber == 4 || canTableNumber == 5) return 1;
        if (canTableNumber == 6 || canTableNumber == 7) return 2;
        if (canTableNumber == 8 || canTableNumber == 9) return 3;
        if (canTableNumber == 0 || canTableNumber == 1) return 4;
        if (canTableNumber == 2 || canTableNumber == 3) return 5;
        throw new IllegalArgumentException("Invalid birth year");
    }

    private int calculateChiNumber(int birthYear) {
        int chiTableNumber = birthYear % 12;
        if (chiTableNumber == 4 || chiTableNumber == 5 || chiTableNumber == 10 || chiTableNumber == 11) return 0;
        if (chiTableNumber == 0 || chiTableNumber == 1 || chiTableNumber == 6 || chiTableNumber == 7) return 1;
        if (chiTableNumber == 2 || chiTableNumber == 3 || chiTableNumber == 8 || chiTableNumber == 9) return 2;
        throw new IllegalArgumentException("Invalid birth year");
    }
}