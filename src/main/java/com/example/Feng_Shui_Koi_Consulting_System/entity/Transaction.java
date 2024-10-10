package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Transaction {
    @Id
    @Column(name = "SubscriptionID")
    String subscriptionID;

    @Column(name = "SubscriptionName")
    String subscriptionName;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "UserID", referencedColumnName = "UserID")
    @JsonManagedReference
    User user;
}
