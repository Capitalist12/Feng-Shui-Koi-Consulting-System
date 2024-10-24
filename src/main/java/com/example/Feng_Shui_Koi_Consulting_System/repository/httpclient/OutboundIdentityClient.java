package com.example.Feng_Shui_Koi_Consulting_System.repository.httpclient;
import com.example.Feng_Shui_Koi_Consulting_System.dto.authentication.ExchangeTokenRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.authentication.ExchangeTokenResponse;
import feign.QueryMap;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name = "outbound-identity", url = "https://oauth2.googleapis.com")
public interface OutboundIdentityClient {
    @PostMapping(value = "/token", produces = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    ExchangeTokenResponse exchangeToken(@QueryMap ExchangeTokenRequest request);
}
