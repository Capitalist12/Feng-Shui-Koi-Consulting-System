package com.example.Feng_Shui_Koi_Consulting_System.entity;

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

    @Column(name = "PlanID")
    String planID;

    @Column(name = "ElementID")
    Integer elementID;

    @Column(name = "DeleteStatus")
    boolean deleteStatus;

    // Lombok will generate getters and setters
}