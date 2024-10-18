package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Blog;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CommentResponse {
    Integer commentID;
    String username;
    LocalDate commentDate;
    String content;
    String blogID;
}
