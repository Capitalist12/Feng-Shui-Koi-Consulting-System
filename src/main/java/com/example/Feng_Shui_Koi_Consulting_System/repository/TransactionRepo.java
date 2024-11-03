package com.example.Feng_Shui_Koi_Consulting_System.repository;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepo extends JpaRepository<Transaction, Integer> {
    Optional<Transaction> findByUser_UserID(String userID);

    @Query("SELECT YEAR(t.createdDay) AS year, MONTH(t.createdDay) AS month, SUM(t.price) AS totalRevenue " +
            "FROM Transaction t " +
            "WHERE t.status = 'SUCCEEDED' " +
            "GROUP BY YEAR(t.createdDay), MONTH(t.createdDay) " +
            "ORDER BY year, month")
    List<Object[]> calculateRevenueByMonth();
}
