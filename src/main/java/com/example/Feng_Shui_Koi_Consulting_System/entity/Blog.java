package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "Blog")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Blog {
    @Id
    @Column(name = "BlogID")
    String blogID;

    @Column(name = "Title")
    String title;

    @Column(name = "ImageURL")
    String imageURL;

    @Column(name = "Description")
    String description;

    @Column(name = "CreatedDate")
    LocalDate createdDate;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "UserID", nullable = false, referencedColumnName = "UserID")
    @JsonBackReference
    User user;

    @OneToMany(mappedBy = "blog", cascade = CascadeType.ALL
            ,orphanRemoval = true)
    @JsonManagedReference
    Set<Comment> comments;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Blog)) return false;
        Blog blog = (Blog) o;
        return Objects.equals(blogID, blog.blogID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(blogID);
    }
}
