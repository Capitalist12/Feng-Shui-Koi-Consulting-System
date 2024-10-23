package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.CommentRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.CommentResponse;
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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CommentService {
    CommentRepo commentRepo;
    BlogRepo blogRepo;
    UserRepository userRepository;
    Random random = new Random();

    @Transactional
    public CommentResponse createComment(String blogId, CommentRequest request) {
        try {
            // Get current logged-in user
            var context = SecurityContextHolder.getContext();
            String email = context.getAuthentication().getName();
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

            // Find the blog
            Blog blog = blogRepo.findById(blogId)
                    .orElseThrow(() -> new AppException(ErrorCode.BLOG_NOT_FOUND));

            // Generate a unique comment ID
            Integer commentId = generateCommentID();
            do {
                commentId = generateCommentID();
            } while (commentRepo.existsById(commentId));

            // Create new comment
            Comment newComment = Comment.builder()
                    .commentID(commentId)
                    .content(request.getContent())
                    .commentDate(LocalDate.now())
                    .user(user)
                    .blog(blog)
                    .build();

            // Initialize comments set if null
            if (blog.getComments() == null) {
                blog.setComments(new HashSet<>());
            }

            // Save the comment first
            Comment savedComment = commentRepo.save(newComment);

            // Add to blog's comments and save blog
            blog.getComments().add(savedComment);
            blogRepo.save(blog);

            // Build and return response
            return CommentResponse.builder()
                    .commentID(savedComment.getCommentID())
                    .username(savedComment.getUser().getUsername())
                    .commentDate(savedComment.getCommentDate())
                    .content(savedComment.getContent())
                    .blogID(savedComment.getBlog().getBlogID())
                    .build();

        } catch (Exception e) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
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
        try {
            // Get current logged-in user
            var context = SecurityContextHolder.getContext();
            String email = context.getAuthentication().getName();
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

            // Find the comment
            Comment comment = commentRepo.findById(commentId)
                    .orElseThrow(() -> new AppException(ErrorCode.COMMENT_NOT_FOUND));

            // Verify the user is the owner of the comment
            if (!comment.getUser().equals(user)) {
                throw new AppException(ErrorCode.UNAUTHORIZED);
            }

            // Update comment
            comment.setContent(request.getContent());
            Comment savedComment = commentRepo.save(comment);

            return CommentResponse.builder()
                    .commentID(savedComment.getCommentID())
                    .username(savedComment.getUser().getUsername())
                    .commentDate(savedComment.getCommentDate())
                    .content(savedComment.getContent())
                    .blogID(savedComment.getBlog().getBlogID())
                    .build();
        } catch (AppException ae) {
            throw ae;
        } catch (Exception e) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }

    @Transactional
    public void deleteComment(Integer commentId) {
        try {
            // Get current logged-in user
            var context = SecurityContextHolder.getContext();
            String email = context.getAuthentication().getName();
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

            // Find the comment
            Comment comment = commentRepo.findById(commentId)
                    .orElseThrow(() -> new AppException(ErrorCode.COMMENT_NOT_FOUND));

            // Verify the user is the owner of the comment or the blog
            if (!comment.getUser().equals(user) && !comment.getBlog().getUser().equals(user)) {
                throw new AppException(ErrorCode.UNAUTHORIZED);
            }

            // Remove from blog's comments
            Blog blog = comment.getBlog();
            blog.getComments().remove(comment);
            blogRepo.save(blog);

            // Delete the comment
            commentRepo.delete(comment);
        } catch (AppException ae) {
            throw ae;
        } catch (Exception e) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }

    private Integer generateCommentID() {
        return random.nextInt(90000) + 10000; // Generates a number between 10000 and 99999
    }
}
