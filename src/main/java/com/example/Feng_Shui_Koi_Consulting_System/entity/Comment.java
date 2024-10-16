package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Entity
@Table(name = "Comment")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Comment {
    @Id
    @Column(name = "CommentID")
    Integer commentID;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "UserID", nullable = false, referencedColumnName = "UserID")
    @JsonBackReference
    User user;

    @Column(name = "CommentDate")
    LocalDate commentDate;
    @Column(name = "Content")
    String content;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "BlogID", nullable = false, referencedColumnName = "BlogID")
    @JsonBackReference
    Blog blog;
}
