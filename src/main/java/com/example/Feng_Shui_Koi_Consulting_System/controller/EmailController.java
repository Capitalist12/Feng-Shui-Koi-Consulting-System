package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("/sendEmail")
    public String sendEmail(){
        sendEmailService.sendEmail("tranhoangdinhk12adv@gmail.com", "Dm", "TestSubject");
        return "Sent successfully";
    }


}
