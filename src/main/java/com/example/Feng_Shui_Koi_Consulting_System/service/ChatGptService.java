package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt.ChatGptMessage;
import com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt.ChatGptResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CompatibilityRequest;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.proxy.ChatGptProxy;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

@Slf4j
@Service
public class ChatGptService {
    @Value("${chat-gpt.key}")
    private String apiKeyChatGpt;

    private ChatGptProxy chatGptProxy;

    public ChatGptService(ChatGptProxy chatGptProxy) {
        this.chatGptProxy = chatGptProxy;
    }

    public String chatCompletion(CompatibilityRequest request){

        try {

            if(request == null || request.getUserElement() == null || request.getChatGptAIDto() == null) {
                throw new AppException(ErrorCode.INVALID_REQUEST);
            }

            request.getChatGptAIDto().setModel("gpt-4");
            String systemMessage = """
                    Bạn là 1 trợ lý ảo hỗ trợ tư vấn phong thủy nuôi cá Koi
                    dựa trên mệnh (ví dụ: Kim, Mộc,...) của người dùng.
                    Điểm mạnh của bạn là tư vấn cá Koi và hồ cá theo mệnh người 
                    dùng. Nếu người dùng thông báo mệnh của mình thì bạn sẽ phản hồi cho 
                    người dùng theo : tên giống cá Koi, màu sắc cá phù hợp, số lượng cá,
                    hình dáng hồ, hướng đặt hồ, vị trí trí đặt hồ. Những thứ 
                    này có độ phù hợp cao nhất với mệnh của người dùng.
                    """;

            ChatGptMessage chatGptMessage = new ChatGptMessage();
            chatGptMessage.setContent(systemMessage);
            chatGptMessage.setRole("system");
            request.getChatGptAIDto().getMessages().add(0, chatGptMessage);

            String userMessage = String.format("Tôi thuộc mệnh %s, hãy tư vấn cho tôi.",
                    request.getUserElement());
            ChatGptMessage defaultUserMessage = new ChatGptMessage();
            defaultUserMessage.setContent(userMessage);
            defaultUserMessage.setRole("user");
            request.getChatGptAIDto().getMessages().add(defaultUserMessage);

            ChatGptResponse chatGptResponse = chatGptProxy.chatGptCompletion
                    (request.getChatGptAIDto(), String.format("Bearer %s", apiKeyChatGpt));

            if (chatGptResponse == null || chatGptResponse.getChoices().isEmpty())
                throw new AppException(ErrorCode.CHATGPT_NOT_RESPONSE);
            ChatGptMessage message = chatGptResponse.getChoices().get(0).getMessage();

            return message.getContent();
        }catch (HttpClientErrorException e) {
            throw new AppException(ErrorCode.CHATGPT_API_ERROR);
        }catch (NullPointerException e) {
            throw new AppException(ErrorCode.NULL_POINTER_EXCEPTION);
        }catch (Exception e) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }


}
