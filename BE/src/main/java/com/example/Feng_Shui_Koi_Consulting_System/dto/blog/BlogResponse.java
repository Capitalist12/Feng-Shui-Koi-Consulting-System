package com.example.Feng_Shui_Koi_Consulting_System.dto.blog;

import com.example.Feng_Shui_Koi_Consulting_System.dto.comment.CommentResponse;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BlogResponse {
    String blogID;
    String title;
    String description;
    String imageURL;
    LocalDate createdDate;
    String user;
    List<CommentResponse> comments;
}
