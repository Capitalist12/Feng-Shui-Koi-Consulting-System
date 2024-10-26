package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Subscriptions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ItemID")
    String itemID;

    @Column(name = "SubID")
    String subscriptionID;

    @Column(name = "Package")
    String subscriptionName;

    @Column(name = "Price")
    double price;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "UserID", referencedColumnName = "UserID")
    @JsonIgnore
    User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Subscriptions)) return false;
        Subscriptions subscriptions = (Subscriptions) o;
        return Objects.equals(subscriptionID, subscriptions.getSubscriptionID());
    }

    @Override
    public int hashCode() {
        return Objects.hash(subscriptionID);
    }
}
