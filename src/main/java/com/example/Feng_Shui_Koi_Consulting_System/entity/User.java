package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;


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
    @JsonIgnore
    Element element;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    Set<Advertisement> advertisements = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    Set<Transaction> transaction;

    @OneToOne(mappedBy = "user")
    @JsonBackReference
    Subscriptions subscriptions;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(userID, user.userID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userID);
    }



    // Lombok will generate getters and setters
}