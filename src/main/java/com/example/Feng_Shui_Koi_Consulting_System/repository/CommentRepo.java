package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Blog;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepo extends JpaRepository<Comment, Integer> {
    boolean existsByCommentID(Integer commentID);
}
