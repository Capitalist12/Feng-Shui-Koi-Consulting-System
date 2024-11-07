package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.blog.BlogRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.blog.BlogResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.comment.CommentResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Blog;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.BlogRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BlogService {
    UserRepository userRepository;
    BlogRepo blogRepo;

    //Constant for generating BlogID
    private static final String ID_PREFIX = "BL";
    private final SecureRandom secureRandom = new SecureRandom();

    public BlogResponse createBlog(BlogRequest request) {
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));

        Blog newblog = Blog.builder()
                .blogID(generateBlogID())
                .title(request.getTitle())
                .description(request.getDescription())
                .imageURL(request.getImageURL())
                .createdDate(LocalDate.now())
                .user(user)
                .build();

        Blog savedblog = blogRepo.save(newblog);

        BlogResponse response = BlogResponse.builder()
                .blogID(savedblog.getBlogID())
                .title(savedblog.getTitle())
                .description(savedblog.getDescription())
                .imageURL(savedblog.getImageURL())
                .createdDate(savedblog.getCreatedDate())
                .user(savedblog.getUser().getUsername())
                .build();

        return response;
    }

    public List<BlogResponse> getListBlogs() {
        return blogRepo.findAll().stream()
                .map(blog -> BlogResponse.builder()
                        .blogID(blog.getBlogID())
                        .title(blog.getTitle())
                        .description(blog.getDescription())
                        .imageURL(blog.getImageURL())
                        .user(blog.getUser().getUsername())
                        .createdDate(blog.getCreatedDate())
                        .comments(blog.getComments().stream()
                                .map(comment -> CommentResponse.builder()
                                        .commentID(comment.getCommentID())
                                        .commentDate(comment.getCommentDate())
                                        .content(comment.getContent())
                                        .username(comment.getUser().getUsername())
                                        .build())
                                .collect(Collectors.toList()))
                        .build())
                .collect(Collectors.toList());
    }
    public BlogResponse getBlogByID(String blogID) {
        return blogRepo.findById(blogID)
                .map(blog -> BlogResponse.builder()
                        .blogID(blog.getBlogID())
                        .title(blog.getTitle())
                        .description(blog.getDescription())
                        .imageURL(blog.getImageURL())
                        .createdDate(blog.getCreatedDate())
                        .user(blog.getUser().getUsername())
                        .comments(blog.getComments().stream()
                                .map(comment -> CommentResponse.builder()
                                        .commentID(comment.getCommentID())
                                        .commentDate(comment.getCommentDate())
                                        .content(comment.getContent())
                                        .username(comment.getUser().getUsername()) // Include username
                                        .build())
                                .collect(Collectors.toList()))
                        .build())
                .orElseThrow(() -> new AppException(ErrorCode.BLOG_NOT_FOUND));
    }

    public BlogResponse updateBlog(String blogID, BlogRequest request){
        Blog blog = blogRepo.findById(blogID)
                .orElseThrow(()-> new AppException(ErrorCode.BLOG_NOT_FOUND));
        blog.setTitle(request.getTitle());
        blog.setDescription(request.getDescription());
        blog.setImageURL(request.getImageURL());

        Blog savedBlog = blogRepo.save(blog);

        BlogResponse response = BlogResponse.builder()
                .blogID(savedBlog.getBlogID())
                .title(savedBlog.getTitle())
                .description(savedBlog.getDescription())
                .imageURL(savedBlog.getImageURL())
                .user(savedBlog.getUser().getUsername())
                .createdDate(savedBlog.getCreatedDate())
                .build();

        return response;
    }

    public void deleteBlog(String blogID){
        Blog blog = blogRepo.findById(blogID).orElseThrow(()
                -> new AppException(ErrorCode.BLOG_NOT_FOUND));
        if(blog != null) {
            blogRepo.deleteById(blogID);
        }
    }

    public String generateBlogID(){
        String blogID;
        int maxAttempts = 10; // Prevent infinite loop
        int attempts = 0;

        do {
            // Generate a random 9-digit number
            int randomNum = secureRandom.nextInt(900000000) + 100000000; // Ensures 9 digits
            blogID = ID_PREFIX + randomNum;

            attempts++;

            if (attempts >= maxAttempts) {
                throw new AppException(ErrorCode.UNABLE_TO_GENERATE_UNIQUE_ID);
            }
        } while (userRepository.existsById(blogID));

        return blogID;
    }

    public String generateImage_Blog(){
        return "BLOG" + String.format("%05d", System.nanoTime() % 100000);
    }

}
