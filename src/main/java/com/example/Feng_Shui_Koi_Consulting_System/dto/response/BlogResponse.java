package com.example.Feng_Shui_Koi_Consulting_System.dto.response;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Blog_Image;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Comment;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BlogResponse {
    String blogID;
    String title;
    String description;
    Set<Blog_Image> imagesBlog;
    LocalDate createdDate;
    String user;
    Set<Comment> comments;
}
