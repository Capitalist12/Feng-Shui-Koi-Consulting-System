package com.example.Feng_Shui_Koi_Consulting_System.configuration;

import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import com.example.Feng_Shui_Koi_Consulting_System.security.CustomerOAuth2User;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Component
public class OAuthAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    Logger logger = LoggerFactory.getLogger(OAuthAuthenticationSuccessHandler.class);

     UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        logger.info("OAuthAuthenicationSuccessHandler");

        CustomerOAuth2User user = (CustomerOAuth2User )authentication.getPrincipal();
        logger.info(user.getName());

        user.getAttributes().forEach((key, value) -> {
            logger.info("{} => {}", key, value);
        });

        logger.info(user.getAuthorities().toString());

        new DefaultRedirectStrategy().sendRedirect(request, response, "/secured");

    }
}
