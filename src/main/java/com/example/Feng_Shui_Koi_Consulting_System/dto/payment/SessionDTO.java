package com.example.Feng_Shui_Koi_Consulting_System.dto.payment;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class SessionDTO {

    String userID;
    String sessionURL;
    String sessionID;
    String message;
    Map<String, String> data;

}
