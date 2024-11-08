package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.user.ElementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.mapper.ElementMapper;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ElementCalculationService {

    ElementRepo elementRepo;
    ElementMapper elementMapper;

    public ElementResponse calculateElementName(LocalDate dateOfBirth) {
        // Kiểm tra dob null
        if (dateOfBirth == null) {
            throw new IllegalArgumentException("Date of birth cannot be null");
        }
        // Tính mệnh theo dob
        int elementId = calculateElementId(dateOfBirth);
        // Trả về element response theo element id
        Element element = elementRepo.findById(elementId).get();
        return elementMapper.toElementResponse(element);
    }

    public int calculateElementId(LocalDate dateOfBirth) {
        if (dateOfBirth == null) {
            throw new IllegalArgumentException("Date of birth cannot be null");
        }

        int birthYear = dateOfBirth.getYear();

        try {
            // Tính mệnh ngũ hành với thiên can và địa chi
            int canNumber = calculateCanNumber(birthYear);
            int chiNumber = calculateChiNumber(birthYear);
            int elementId = canNumber + chiNumber;

            // Trường hợp đặc biệt (>6)
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
        if (canTableNumber == 4 || canTableNumber == 5) return 1; // (Giáp(4), Ất(5) giá trị là 1)
        if (canTableNumber == 6 || canTableNumber == 7) return 2; // (Bính(6), Đinh(7) giá trị là 2)
        if (canTableNumber == 8 || canTableNumber == 9) return 3; // (Mậu(8), Kỷ(9) giá trị là 3)
        if (canTableNumber == 0 || canTableNumber == 1) return 4; // (Canh(0), Tân(1) giá trị là 4)
        if (canTableNumber == 2 || canTableNumber == 3) return 5; // (Nhâm(2), Quý(3) giá trị là 5)
        throw new IllegalArgumentException("Invalid birth year");
    }

    private int calculateChiNumber(int birthYear) {
        int chiTableNumber = birthYear % 12;
        if (chiTableNumber == 4 || chiTableNumber == 5 || chiTableNumber == 10 || chiTableNumber == 11) return 0; // (Tý(4), Sửu(5), Ngọ(10), Mùi (11)  giá trị là 0)
        if (chiTableNumber == 0 || chiTableNumber == 1 || chiTableNumber == 6 || chiTableNumber == 7) return 1; // Thân(0),  Dậu(1), Dần(6), Mão(7) giá trị là 1
        if (chiTableNumber == 2 || chiTableNumber == 3 || chiTableNumber == 8 || chiTableNumber == 9) return 2; // Tuất(2), Hợi(3), Thìn(8), Tị(9) giá trị là 2
        throw new IllegalArgumentException("Invalid birth year");
    }
}