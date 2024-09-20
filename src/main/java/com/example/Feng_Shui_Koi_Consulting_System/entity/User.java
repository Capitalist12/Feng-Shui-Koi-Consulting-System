package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;


@Entity
@Table(name = "`User`")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {
    @Id
    @Column(name = "UserID", length = 10)
    String userID;

    @Column(name = "UserName", length = 50, nullable = false)
    String username;

    @Column(name = "Password", length = 255, nullable = false)
    String password;

    @Column(name = "DateOfBirth")
    LocalDate dateOfBirth;

    @Column(name = "Email", length = 100)
    String email;

    @Column(name = "Status")
    boolean status;

    @Column(name = "ImageID", length = 50)
    String imageID;

    @Column(name = "RoleID")
    Integer roleID;

    @Column(name = "PlanID", length = 50)
    String planID;

    @Column(name = "ElementID")
    Integer elementID;

    @Column(name = "DeleteStatus")
    boolean deleteStatus;

    // Lombok will generate getters and setters
}