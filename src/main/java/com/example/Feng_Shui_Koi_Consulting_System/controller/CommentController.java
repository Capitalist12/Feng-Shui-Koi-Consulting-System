package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CommentRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.CommentResponse;
import com.example.Feng_Shui_Koi_Consulting_System.service.CommentService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("/blog/{blogID}/comments")
public class CommentController {
    CommentService commentService;

    @PostMapping
    public ApiResponse<CommentResponse> createComment(
            @PathVariable String blogID,
            @RequestBody CommentRequest request) {
        return ApiResponse.<CommentResponse>builder()
                .result(commentService.createComment(blogID, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<CommentResponse>> getCommentsByBlogID(
            @PathVariable String blogID) {
        return ApiResponse.<List<CommentResponse>>builder()
                .result(commentService.getCommentsByBlogID(blogID))
                .build();
    }

    @PutMapping("/{commentID}")
    public ApiResponse<CommentResponse> updateComment(
            @PathVariable String blogID,
            @PathVariable Integer commentID,
            @RequestBody CommentRequest request) {
        return ApiResponse.<CommentResponse>builder()
                .result(commentService.updateComment(commentID, request))
                .build();
    }

    @DeleteMapping("/{commentID}")
    public ApiResponse<String> deleteComment(
            @PathVariable String blogID,
            @PathVariable Integer commentID) {
        commentService.deleteComment(commentID);
        return ApiResponse.<String>builder()
                .result("Comment has been deleted!")
                .build();
    }
}