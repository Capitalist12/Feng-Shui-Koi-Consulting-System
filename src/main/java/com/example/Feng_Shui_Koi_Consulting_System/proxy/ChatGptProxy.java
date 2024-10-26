package com.example.Feng_Shui_Koi_Consulting_System.proxy;

import com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt.ChatGptAIDto;
import com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt.ChatGptResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;

@FeignClient(url = "https://api.openai.com/v1", name = "chat-gpt-proxy-service")
@Component
public interface ChatGptProxy {

    @PostMapping(value = "chat/completions")
    @ResponseBody
    ChatGptResponse chatGptCompletion(@RequestBody ChatGptAIDto request, @RequestHeader
            ("Authorization") String authorizationHeader);
}
