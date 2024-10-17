package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.BlogCreationRequest;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.AdvertisementResponse;
import com.example.Feng_Shui_Koi_Consulting_System.dto.response.BlogResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Blog;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Blog_Image;
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

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BlogService {
    UserRepository userRepository;
    BlogRepo blogRepo;

    public BlogResponse createBlog(BlogCreationRequest request) {
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));
        Blog newblog = Blog.builder()
                .blogID(generateBlogID())
                .title(request.getTitle())
                .description(request.getDescription())
                .createdDate(LocalDate.now())
                .user(user)
                .build();
        if (request.getImagesURL() != null && !request.getImagesURL().isEmpty()) {
            Set<Blog_Image> imagesBlog = request.getImagesURL().stream()
                    .map(imageUrl -> Blog_Image.builder()
                            .blogImageId(generateImage_Blog())
                            .imageURL(imageUrl)
                            .blog(newblog) // Set the association to the advertisement
                            .build())
                    .collect(Collectors.toSet());
            newblog.setImagesBlog(imagesBlog);
        }
        Blog savedblog = blogRepo.save(newblog);

        BlogResponse response = BlogResponse.builder()
                .blogID(savedblog.getBlogID())
                .title(savedblog.getTitle())
                .description(savedblog.getDescription())
                .imagesBlog(savedblog.getImagesBlog())
                .user(savedblog.getUser().getUsername())
                .createdDate(savedblog.getCreatedDate())
                .build();

        return response;
    }

    public List<BlogResponse> getListBlogs() {
        return blogRepo.findAll().stream()
                .map(blog -> BlogResponse.builder()
                        .blogID(blog.getBlogID())
                        .title(blog.getTitle())
                        .description(blog.getDescription())
                        .user(blog.getUser().getUsername())
                        .imagesBlog(blog.getImagesBlog())
                        .comments(blog.getComments())// Pass the set of Ads_Image directly
                        .build())
                .collect(Collectors.toList());
    }

    public String generateBlogID(){
        return "BLOG" + String.format("%05d", System.nanoTime() % 100000);
    }

    public String generateImage_Blog(){
        return "BLOG" + String.format("%05d", System.nanoTime() % 100000);
    }

}
