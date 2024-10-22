package com.example.Feng_Shui_Koi_Consulting_System.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDateTime;
import java.util.Objects;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TransactionID")
    Integer transactionID;

    @Column(name = "TransactionName")
    String transactionName;

    @Column(name = "Price")
    double price;

    @Column(name = "CreatedDay")
    LocalDateTime createdDay;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "UserID", nullable = false, referencedColumnName = "UserID")
    @JsonBackReference
    User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Transaction)) return false;
        Transaction transaction = (Transaction) o;
        return Objects.equals(transactionID, transaction.getTransactionID());
    }

    @Override
    public int hashCode() {
        return Objects.hash(transactionID);
    }



}
