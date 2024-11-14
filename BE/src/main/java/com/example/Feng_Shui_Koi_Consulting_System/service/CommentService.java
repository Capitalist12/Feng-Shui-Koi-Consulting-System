package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.comment.CommentRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.comment.CommentResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Blog;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Comment;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.BlogRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.CommentRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class CommentService {
    CommentRepo commentRepo;
    BlogRepo blogRepo;
    UserRepository userRepository;

    //Constants to generate CommentID
    private static final int MIN_COMMENT_ID = 10000; // Keep minimum 5 digits
    private static final int MAX_COMMENT_ID = Integer.MAX_VALUE; // Maximum possible integer value (2147483647)

    @Transactional
    public CommentResponse createComment(String blogId, CommentRequest request) {
            // Lấy user đang comment ra
            var context = SecurityContextHolder.getContext();
            String email = context.getAuthentication().getName();
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

            // Tìm blog đang comment
            Blog blog = blogRepo.findById(blogId)
                    .orElseThrow(() -> new AppException(ErrorCode.BLOG_NOT_FOUND));

            // Generate a unique comment ID
            Integer commentId = generateCommentID();
            commentId = generateCommentID();

            // Tạo comment mới
            Comment newComment = Comment.builder()
                    .commentID(commentId)
                    .content(request.getContent())
                    .commentDate(LocalDate.now())
                    .user(user)
                    .blog(blog)
                    .build();

            // Tạo comment set mới nếu null
            if (blog.getComments() == null) {
                blog.setComments(new HashSet<>());
            }

            // Lưu comment vừa tạo
            Comment savedComment = commentRepo.save(newComment);

            // Add comment vừa tạo vào blog
            blog.getComments().add(savedComment);
            blogRepo.save(blog);

            // Tạo và trả về response
            return CommentResponse.builder()
                    .commentID(savedComment.getCommentID())
                    .username(savedComment.getUser().getUsername())
                    .commentDate(savedComment.getCommentDate())
                    .content(savedComment.getContent())
                    .blogID(savedComment.getBlog().getBlogID())
                    .build();

    }

    public List<CommentResponse> getCommentsByBlogID(String blogId) {
        Blog blog = blogRepo.findById(blogId)
                .orElseThrow(() -> new AppException(ErrorCode.BLOG_NOT_FOUND));

        return blog.getComments().stream()
                .map(comment -> CommentResponse.builder()
                        .commentID(comment.getCommentID())
                        .username(comment.getUser().getUsername())
                        .commentDate(comment.getCommentDate())
                        .content(comment.getContent())
                        .blogID(comment.getBlog().getBlogID())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional
    public CommentResponse updateComment(Integer commentId, CommentRequest request) {

            // Lấy user đang update
            var context = SecurityContextHolder.getContext();
            String email = context.getAuthentication().getName();
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

            // Tìm comment cần update
            Comment comment = commentRepo.findById(commentId)
                    .orElseThrow(() -> new AppException(ErrorCode.COMMENT_NOT_FOUND));

            // Xác thực user là người comment
            if (!comment.getUser().equals(user)) {
                throw new AppException(ErrorCode.UNAUTHORIZED);
            }

            // Update comment
            comment.setContent(request.getContent());
            Comment savedComment = commentRepo.save(comment);

            // Trả response
            return CommentResponse.builder()
                    .commentID(savedComment.getCommentID())
                    .username(savedComment.getUser().getUsername())
                    .commentDate(savedComment.getCommentDate())
                    .content(savedComment.getContent())
                    .blogID(savedComment.getBlog().getBlogID())
                    .build();

    }

    @Transactional
    public void deleteComment(Integer commentId) {
        // Get the user trying to delete the comment
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

        // Find the comment to delete
        Comment comment = commentRepo.findById(commentId)
                .orElseThrow(() -> new AppException(ErrorCode.COMMENT_NOT_FOUND));

        // Kiểm tra có phải chủ comment hoặc chủ blog
        boolean isCommentAuthor = comment.getUser().getUserID().equals(user.getUserID());  // Use ID comparison instead of equals()
        boolean isBlogOwner = comment.getBlog().getUser().getUserID().equals(user.getUserID());  // Use ID comparison instead of equals()

        if (isCommentAuthor || isBlogOwner) {
            // Xóa comment khỏi blog
            Blog blog = comment.getBlog();
            blog.getComments().remove(comment);
            blogRepo.save(blog);

            // Xóa comment
            commentRepo.delete(comment);
        }else {
            throw new AppException(ErrorCode.UNAUTHORIZED);
        }

    }

    private Integer generateCommentID() {
        SecureRandom secureRandom = new SecureRandom();
        Integer commentId;
        int maxAttempts = 10; // Prevent infinite loop
        int attempts = 0;

        do {
            // Generate a random number between MIN_COMMENT_ID and MAX_COMMENT_ID
            long range = (long) MAX_COMMENT_ID - MIN_COMMENT_ID;
            commentId = (int) (secureRandom.nextDouble() * range) + MIN_COMMENT_ID;

            attempts++;
            if (attempts >= maxAttempts) {
                throw new AppException(ErrorCode.UNABLE_TO_GENERATE_UNIQUE_ID);
            }
        } while (commentRepo.existsById(commentId));

        return commentId;
    }
}
