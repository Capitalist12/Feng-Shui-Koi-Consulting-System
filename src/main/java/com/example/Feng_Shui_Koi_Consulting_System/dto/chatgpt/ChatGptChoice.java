package com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ChatGptChoice {
    Long index;
    ChatGptMessage message;
    String finish_reason;


}
