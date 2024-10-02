package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.service.EmailService;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmailController {
    @Autowired
    EmailService sendEmailService;

    @GetMapping("/sendEmail")
    public String sendEmail() {
        String recipient = "dinht1706@gmail.com";
        String body = "This is your password that has been create";
        String subject = "Password registered";
        sendEmailService.sendEmail(recipient, body, subject);
        return "Sent successfully";
    }
}
