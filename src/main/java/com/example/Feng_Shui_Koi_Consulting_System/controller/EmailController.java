package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmailController {
    @Autowired
    private SendEmailService sendEmailService;

    @PostMapping("/sendEmail/{recipient}")
    public String sendEmail(@PathVariable String recipient,
                            @RequestParam String body,
                            @RequestParam String subject){

        sendEmailService.sendEmail(recipient, body, subject);
        return "Sent successfully";
    }
}
