package com.example.Feng_Shui_Koi_Consulting_System.service;

import com.example.Feng_Shui_Koi_Consulting_System.entity.Roles;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Transaction;
import com.example.Feng_Shui_Koi_Consulting_System.entity.User;
import com.example.Feng_Shui_Koi_Consulting_System.exception.AppException;
import com.example.Feng_Shui_Koi_Consulting_System.exception.ErrorCode;
import com.example.Feng_Shui_Koi_Consulting_System.repository.TransactionRepo;
import com.example.Feng_Shui_Koi_Consulting_System.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DashBoardService {

    TransactionRepo transactionRepo;
    UserRepository userRepository;

    public Map<String, Double> getRevenueByMonth() {
        //fetch the revenue data by month
        List<Object[]> results = transactionRepo.calculateRevenueByMonth();
        Map<String, Double> revenueByMonth = new HashMap<>();

        for(Object[] result : results) {
            Integer year = (Integer) result[0];
            Integer month = (Integer) result[1];
            Double totalRevenue = (Double) result[2];
            // Create the key in the "year-month" format
            String monthYear = String.format("%d-%d", year, month);
            revenueByMonth.put(monthYear, totalRevenue);
        }

        return revenueByMonth;
    }

    public Map<String, Object> getUserDashBoard() {

        Map<String, Object> stats =  new HashMap<>();
        long userCount = userRepository.countByRole(Roles.USER.toString());
        stats.put("userCount", userCount);
        long memberCount = userRepository.countByRole(Roles.MEMBER.toString());
        stats.put("memberCount", memberCount);

        return  stats;
    }

    public List<Transaction> userTransactions() {
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_EXIST));
        return transactionRepo.findAllByUserID(user.getUserID());

    }
}
