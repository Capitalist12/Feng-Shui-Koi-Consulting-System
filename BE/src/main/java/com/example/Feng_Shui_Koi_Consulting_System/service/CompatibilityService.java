package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.compatibility.CompatibilityRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.compatibility.CompatibilityResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Element;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Tank;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.ElementRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TankRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

import java.util.Set;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class CompatibilityService {

    ElementRepo elementRepo;
    TankRepo tankRepo;
    ChatGptService chatGptService;



    //Method transfer color to element
    public String elementFromColor(String color) {
        return elementRepo.findByColor(color)
                .map(Element::getElementName)
                .orElseThrow(() -> new AppException(ErrorCode.UNKNOWN_COLORS));
    }
    //Method transfer shape to element
    public String elementFromShape(String shape) {
        if(shape.isEmpty()) throw new AppException(ErrorCode.INVALID_REQUEST);
        Tank tank = tankRepo.findByShape(shape).orElseThrow(() -> new
                AppException(ErrorCode.TANK_NOT_FOUND));
        return tank.getElementTank().getElementName();
    }
    //Method calculate compatibility between fish, tank, user's element
    public CompatibilityResponse compatibilityScore(String elementName, String tankElement,
                                                    Set<Set<String>> fishElements,
                                                    CompatibilityRequest request) {


        Element userElement = elementRepo.findByElementName(elementName)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));
        double finalScore;

        double totalFishScore = 0;
        int numFish = fishElements.size();

        // Score all fish based on their element
        for (Set<String> koiFish : fishElements) {
            double fishScore = 0;
            int numElements = koiFish.size();

            // Score each element of the fish
            for (String element : koiFish) {
                double weight = 1.0 / numElements;  // Weight based on number of elements
                double score = 0;

                // Compare user element with fish element
                if (userElement.getElementName().equals(element)) {
                    score += 50; // Yếu tố cá giống với yếu tố người dùng
                } else if (userElement.getGeneration().equals(element)) {
                    score += 50; // Quan hệ thuận lợi
                } else if (userElement.getInhibition().equals(element)) {
                    score -= 50; // Quan hệ bất lợi
                } else {
                    score += 25; // Quan hệ trung lập
                }

                fishScore += score * weight; // Tính điểm có tỉ trọng cho mỗi yếu tố
            }

            totalFishScore += fishScore; // Tổng điểm của tất cả cá
        }

        // calculate average fish score
        double averageFishScore = totalFishScore / numFish;
        double finalFishScore =  (totalFishScore / (numFish * 50)) * 100;


        // Compare user element with tank element
        double tankScore = 0;
        if (userElement.getElementName().equals(tankElement)) {
            tankScore += 50;
        } else if (userElement.getGeneration().equals(tankElement)) {
            tankScore += 50;
        } else if (userElement.getInhibition().equals(tankElement)) {
            tankScore -= 50;
        } else {
            tankScore += 25;
        }

        if (tankScore < 0) {
            finalScore = (averageFishScore * 0.8) + (tankScore * 0.2);
        } else {
            finalScore = (averageFishScore * 0.5) + (tankScore * 0.5);
        }
        double finalTankScore = tankCompatibilityScore(elementName, tankElement);


        return CompatibilityResponse.builder()
                .fishCompatibilityScore(Math.max(0, Math.min(100, finalFishScore)))
                .tankCompatibilityScore(finalTankScore)
                .calculateCompatibilityScore(Math.max(0, Math.min(100, finalScore))) // Điểm tổng (0 - 100)
                .advise(chatGptService.chatCompletion(request))
                .build();
    }


//Method to calculate compatibility between tank and user's element
    public double tankCompatibilityScore(String elementName,
                                         String tankElement) {
        Element userElement = elementRepo.findByElementName(elementName)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

        double tankScore = 0;
        // Compare user element with tank element
        if (userElement.getElementName().equals(tankElement)) {
            tankScore += 100;
        } else if (userElement.getGeneration().equals(tankElement)) {
            tankScore += 100;
        } else if (userElement.getInhibition().equals(tankElement)) {
            tankScore -= 0;
        } else {
            tankScore += 50;
        }

        return tankScore;
    }





}
