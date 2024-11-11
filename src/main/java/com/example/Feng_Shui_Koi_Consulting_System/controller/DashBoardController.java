package com.example.Feng_Shui_Koi_Consulting_System.controller;

import com.example.Feng_Shui_Koi_Consulting_System.dto.ApiResponse;
import com.example.Feng_Shui_Koi_Consulting_System.entity.Transaction;
import com.example.Feng_Shui_Koi_Consulting_System.service.DashBoardService;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@Data
@Builder
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DashBoardController {

    DashBoardService dashBoardService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/revenue/monthly")
    public ApiResponse<Map<String, Double>> getRevenueByMonth() {
        return ApiResponse.<Map<String, Double>>builder()
                .result(dashBoardService.getRevenueByMonth())
                .build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/user/dashboard")
    public ApiResponse<Map<String, Object>> getUserDashBoard() {
        return ApiResponse.<Map<String, Object>>builder()
                .result(dashBoardService.getUserDashBoard())
                .build();
    }

    @GetMapping("/user/transactions")
    public ApiResponse<List<Transaction>> userTransactions() {
        return ApiResponse.<List<Transaction>>builder()
                .result(dashBoardService.userTransactions())
                .build();
    }
}
