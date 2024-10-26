package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Blog_Image {
    @Id
    @Column(name = "BlogImageID")
    String blogImageId;
    @Column(name = "BlogImageURL")
    String imageURL;



    @ManyToOne
    @JoinColumn(name = "BlogID", nullable = false,  referencedColumnName = "BlogID")
    @JsonBackReference
    Blog blog;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Blog_Image)) return false;
        Blog_Image blogImage = (Blog_Image) o;
        return Objects.equals(blogImage, blogImage.blogImageId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(blogImageId);
    }
}
