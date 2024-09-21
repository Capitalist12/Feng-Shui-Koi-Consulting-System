package com.example.Feng_Shui_Koi_Consulting_System.exception;

import com.example.Feng_Shui_Koi_Consulting_System.dto.request.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = Exception.class)
//    ResponseEntity<String> handLingRuntimeException(RuntimeException exception){
//        return ResponseEntity.badRequest().body(exception.getMessage());
//    }
    ResponseEntity<ApiResponse> handLingRuntimeException(Exception exception){
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(ErrorCode.UNKNOWN_EXCEPTION.getCode());
        apiResponse.setMessage(ErrorCode.UNKNOWN_EXCEPTION.getMessage());
        return ResponseEntity.badRequest().body(apiResponse);
    }

    @ExceptionHandler(value = AppException.class)
    ResponseEntity<ApiResponse> handLingAppException(AppException exception){
        ErrorCode errorCode = exception.getErrorCode();

        ApiResponse apiResponse = new ApiResponse();

        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);
    }

    //Su dung enum key de dinh danh Exception
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<ApiResponse> handLingValidation(MethodArgumentNotValidException exception){
        String enumKey = exception.getFieldError().getDefaultMessage();

        ErrorCode errorCode = ErrorCode.ENUMKEY_INVALID;

        try {
            errorCode = ErrorCode.valueOf(enumKey);
        }
        catch (IllegalArgumentException e){}

        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);
    }

}