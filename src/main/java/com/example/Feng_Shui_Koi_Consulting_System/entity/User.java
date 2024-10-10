package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;


@Entity
@Table(name = "User")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)


public class User {

    @Id
    @Column(name = "UserID")
    String userID;

    @Column(name = "UserName")
    String username;

    @Column(name = "Password")
    String password;

    @Column(name = "DateOfBirth")
    LocalDate dateOfBirth;

    @Column(name = "Email")
    String email;

    @Column(name = "ImageURL")
    String imageLink;

    @Column(name = "RoleName")
    String roleName;


    @Column(name = "DeleteStatus")
    boolean deleteStatus;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "ElementID", nullable = false, referencedColumnName = "ElementID")
    @JsonBackReference
    Element element;

    @OneToOne(mappedBy = "user")
    @JsonBackReference
    Transaction transaction;

    // Lombok will generate getters and setters
}