package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.entity.KoiFish;
import com.example.Feng_Shui_Koi_Consulting_System.service.FishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/consult")
public class ConsultingController {
   @Autowired
    private FishService fishService;

    @GetMapping("/fishAdvice")
    public String getFishAdvice(@RequestParam("elementName") String elementName, Model model){
        List<KoiFish> koiFishList = fishService.getKoiFishByElement(elementName);
        model.addAttribute("koiFishList", koiFishList);
        return "ConsultingResult";
    }
}
