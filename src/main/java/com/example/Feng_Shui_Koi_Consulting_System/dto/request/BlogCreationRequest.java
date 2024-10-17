package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Comment;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BlogCreationRequest {
    String title;
    String imageURL;
    String description;
}
