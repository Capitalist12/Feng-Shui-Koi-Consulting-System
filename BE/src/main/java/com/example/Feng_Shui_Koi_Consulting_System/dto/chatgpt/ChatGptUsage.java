package com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ChatGptUsage {
    Long prompt_tokens;
    Long completion_tokens;
    Long total_tokens;
}
