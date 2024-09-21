package com.example.Feng_Shui_Koi_Consulting_System.configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;


@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI().info(new Info().title("Spring Boot Rest API")
                .description("Spring Boot Rest API")
                .contact(new Contact().name("Thang111"))
                .version("1.0.0"));



    }


}
