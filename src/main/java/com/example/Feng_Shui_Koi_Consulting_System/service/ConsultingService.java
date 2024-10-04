package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CompatibilityRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.CompatibilityResponse;
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
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class ConsultingService {

    ElementRepo elementRepo;
    TankRepo tankRepo;
    ChatClient chatClient;


    public String elementFromColor(String color) {
        return elementRepo.findByColor(color)
                .map(Element::getElementName)
                .orElse("Unknow Element");
    }

    public String elementFromShape(String shape) {
        Tank tank = tankRepo.findByShape(shape).orElseThrow(() -> new
                AppException(ErrorCode.TANK_NOT_FOUND));
        return tank.getElementTank().getElementName();
    }

    public CompatibilityResponse compatibilityScore(String elementName, String tankElement,
                                                    Set<Set<String>> fishElements, CompatibilityRequest request) {

        Element userElement = elementRepo.findByElementName(elementName)
                .orElseThrow(() -> new AppException(ErrorCode.ELEMENT_NOT_EXIST));

        double totalFishScore = 0;
        int numFish = fishElements.size();

        // Tính điểm cho tất cả các con cá dựa trên yếu tố của chúng
        for (Set<String> koiFish : fishElements) {
            double fishScore = 0;
            int numElements = koiFish.size();

            // Tính điểm cho từng yếu tố của cá
            for (String element : koiFish) {
                double weight = 1.0 / numElements; // Tỉ trọng dựa trên số yếu tố
                double score = 0;

                // So sánh yếu tố của người dùng với yếu tố của cá
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

        // Tính điểm trung bình của cá
        double averageFishScore = totalFishScore / numFish;

        // Tính điểm cho yếu tố bể (pond element)
        double tankScore = 0;
        if (userElement.getElementName().equals(tankElement)) {
            tankScore += 50; // Yếu tố bể giống với yếu tố người dùng
        } else if (userElement.getGeneration().equals(tankElement)) {
            tankScore += 50; // Quan hệ thuận lợi với bể
        } else if (userElement.getInhibition().equals(tankElement)) {
            tankScore -= 50; // Quan hệ bất lợi với bể
        } else {
            tankScore += 25; // Quan hệ trung lập với bể
        }

        // Thay vì chia trung bình giữa cá và bể, bạn có thể dùng phép cộng
        double finalScore = (averageFishScore + tankScore); // Tổng điểm cá và bể


        return CompatibilityResponse.builder()
                .calculateCompatibilityScore(Math.max(0, Math.min(100, finalScore)))
                .build(); // Clamp score between 0 and 100

    }


//    public String getAdvice(CompatibilityRequest request,
//                            double calculateCompatibilityScore) {
//
//        if (request.getUserElement() == null || request.getTankShape() == null || request.getKoiFishColors() == null) {
//            throw new IllegalArgumentException("Missing required compatibility information.");
//        }
//
//        String koiFishColors = request.getKoiFishColors().stream()
//                .map(set -> String.join(", ", set))  // Chuyển mỗi Set<String> thành chuỗi với các phần tử phân cách bằng dấu phẩy
//                .collect(Collectors.joining("; "));  // Sau đó, kết hợp các chuỗi lại với nhau, phân cách bởi dấu chấm phẩy
//
//        // Gọi đến AI client để lấy tư vấn
//        String advice = chatClient.prompt()
//       .user(u -> u.text(String.format(" The user's element is %s, tank shape %s, and Compatibility between" +
//                       " user's element and Koi fish and tank characteristics is (%.2f%%). "
//                        + "The koi fish have the following colors: %s. "
//                        + "Please suggest optimal koi fish colors and a tank shape to improve compatibility.",
//                request.getUserElement(),
//                request.getTankShape(),
//                calculateCompatibilityScore,
//                koiFishColors)))
//                .call()
//                .entity(String.class);
//        return advice;
//
//    }


}
