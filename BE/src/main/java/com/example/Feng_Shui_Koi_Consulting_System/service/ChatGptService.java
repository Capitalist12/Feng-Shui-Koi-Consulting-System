package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt.ChatGptMessage;
import com.example.Feng_Shui_Koi_Consulting_System.dto.chatgpt.ChatGptResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.compatibility.CompatibilityRequest;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.proxy.ChatGptProxy;
import feign.FeignException;
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

    //Method to get advise by Chatgpt
    public String chatCompletion(CompatibilityRequest request){

        try {

            if (request == null || request.getUserElement() == null || request.getChatGptAIDto() == null) {
                throw new AppException(ErrorCode.INVALID_REQUEST);
            }
            // Set the model to GPT-4 for ChatGPT completion
            request.getChatGptAIDto().setModel("gpt-4");
            // Define system message that sets up chatgpt
            String systemMessage = """
                    Bạn là một trợ lý ảo chuyên tư vấn phong thủy
                    về việc nuôi cá Koi dựa trên mệnh của người dùng
                    (ví dụ: Kim, Mộc, Thủy, Hỏa, Thổ). Điểm mạnh của 
                    bạn là đưa ra lời khuyên về giống cá Koi, màu sắc, 
                    số lượng cá, hình dáng hồ, hướng và vị trí đặt hồ 
                    phù hợp nhất với mệnh của người dùng. Khi người dùng 
                    thông báo mệnh của mình, bạn sẽ cung cấp các gợi ý 
                    cụ thể và có độ phù hợp cao nhất theo mệnh đó.
                    """;
            // Create and add the system message to the request
            ChatGptMessage chatGptMessage = new ChatGptMessage();
            chatGptMessage.setContent(systemMessage);
            chatGptMessage.setRole("system");
            request.getChatGptAIDto().getMessages().add(0, chatGptMessage);

            // Create and add the user message to the request
            String userMessage = String.format("Tôi thuộc mệnh %s, hãy tư vấn cho tôi.",
                    request.getUserElement());
            ChatGptMessage defaultUserMessage = new ChatGptMessage();
            defaultUserMessage.setContent(userMessage);
            defaultUserMessage.setRole("user");
            request.getChatGptAIDto().getMessages().add(defaultUserMessage);
            //Send prompt to chatgpt
            ChatGptResponse chatGptResponse = chatGptProxy.chatGptCompletion
                    (request.getChatGptAIDto(), String.format("Bearer %s", apiKeyChatGpt));

            if (chatGptResponse == null || chatGptResponse.getChoices().isEmpty())
                throw new AppException(ErrorCode.CHATGPT_NOT_RESPONSE);
            //Get chatgpt response
            ChatGptMessage message = chatGptResponse.getChoices().get(0).getMessage();

            return message.getContent();
        }catch (FeignException.NotFound e) {
            throw new AppException(ErrorCode.API_KEY_EXPIRED);
        }catch (FeignException.Unauthorized e) {
            throw new AppException(ErrorCode.UNAUTHORIZED_GPT);
        }catch (FeignException.BadRequest e) {
            throw new AppException(ErrorCode.INVALID_REQUEST_CHATGPT);
        }catch (HttpClientErrorException e) {
            throw new AppException(ErrorCode.CHATGPT_API_ERROR);
        }catch (NullPointerException e) {
            throw new AppException(ErrorCode.NULL_POINTER_EXCEPTION);
        }catch (AppException e) {
            throw e;
        }catch (Exception e) {
            log.error("Exception:", e);
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }


}
