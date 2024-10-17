package com.example.Feng_Shui_Koi_Consulting_System;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EnableFeignClients
@EnableScheduling
public class FengShuiKoiConsultingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(FengShuiKoiConsultingSystemApplication.class, args);
	}

}
