package com.example.Feng_Shui_Koi_Consulting_System.configuration;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    private OAuthAuthenticationSuccessHandler oAuthAuthenticationSuccessHandler;


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http, OAuthAuthenticationSuccessHandler handler) throws Exception {
        return http
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/").permitAll();        // Cho phép truy cập trang chủ không cần xác thực
                    auth.requestMatchers("/secured").authenticated();  // Chỉ cho phép truy cập "/secured" sau khi đăng nhập
                    auth.anyRequest().authenticated();            // Các yêu cầu khác đều cần xác thực
                })
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(handler)  // Gọi successHandler sau khi đăng nhập thành công
                )
                .build();
    }
}
