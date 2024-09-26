package com.example.Feng_Shui_Koi_Consulting_System.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ForgotPassword {
    @Id
    String forgetPasswordId;

    @Column(nullable = false)
    Integer otp;

    @Column(nullable = false)
    Date expirationTime;

    @OneToOne
    User user;
}
