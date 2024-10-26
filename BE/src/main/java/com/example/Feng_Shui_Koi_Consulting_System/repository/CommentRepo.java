package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CommentRepo extends JpaRepository<Comment, Integer> {
    boolean existsByCommentID(Integer commentID);
}
