package com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt;

import lombok.*;
import lombok.experimental.FieldDefaults;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ChatGptAIDto {
    String model;
    List<ChatGptMessage> messages;

}
