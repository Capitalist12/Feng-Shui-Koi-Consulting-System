package com.example.Feng_Shui_Koi_Consulting_System.exception;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Getter
@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    FISH_EXISTED(1001, "Fish existed", BAD_REQUEST),
    FISH_NOT_FOUND(1002, "Fish not found", HttpStatus.NOT_FOUND),
    TANK_EXISTED(1003, "Tank existed", BAD_REQUEST),
    TANK_NOT_FOUND(1004, "Tank not found", HttpStatus.NOT_FOUND),
    INVALID_KEY(1005, "Invalid message key", BAD_REQUEST),
    UNCATEGORIZED_EXCEPTION(999, "Uncategorized error", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXIST(1006,"User existed", BAD_REQUEST),
    EMAIL_EXITST(1007,"Email existed", BAD_REQUEST),
    USER_NOT_EXIST(1008,"User not exist", HttpStatus.NOT_FOUND),
    EMAIL_NOT_EXIST(1009,"Email not exist", HttpStatus.NOT_FOUND),
    KOI_TYPE_NOT_EXIST(1010,"KoiType not exist", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1011,"Unauthenticated", HttpStatus.UNAUTHORIZED),
    ENUMKEY_INVALID(1012,"Invalid Enum Key!", BAD_REQUEST),
    USERNAME_INVALID(1013,"Invalid username", BAD_REQUEST),
    PASSWORD_INVALID(1014,"Invalid password", BAD_REQUEST),
    EMAIL_INVALID(1015,"Invalid email", BAD_REQUEST),
    UNAUTHORIZED(1016,"You don't have permission", HttpStatus.FORBIDDEN),
    ELEMENT_NOT_EXIST(1017,"Element not exist", HttpStatus.NOT_FOUND),
    KOI_TYPE_EXIST(1018,"KoiType existed", BAD_REQUEST),
    PASSWORD_EXIST(1019,"Password existed", BAD_REQUEST),
    INVALID_TOKEN(1020, "Token invalid", BAD_REQUEST ),
    EXPIRED_TOKEN(1021, "Token expired", BAD_REQUEST),
    SEND_MAIL_FAILED(1022, "Send mail failed", BAD_REQUEST ),
    OTP_NOT_FOUND(1023, "OTP not found", BAD_REQUEST ),
    AD_NOT_EXIST(1024, "Advertisement not found", HttpStatus.NOT_FOUND),
    SESSION_ID_NULL(1025, "SessionID is null", BAD_REQUEST ),
    CATEGORY_NOT_EXIST(1026, "Category not found", HttpStatus.NOT_FOUND),
    OTP_REQUIRED(1027, "OTP required", BAD_REQUEST ),
    BLOG_NOT_FOUND(1028, "BlogID not found", BAD_REQUEST ),
    COMMENT_NOT_FOUND(1029, "Comment not found", BAD_REQUEST ),
    STATUS_INVALID(1030, "Status invalid", BAD_REQUEST),
    CHATGPT_NOT_RESPONSE(1031, "OpenAI API Gateway Timeout", HttpStatus.GATEWAY_TIMEOUT ),
    NULL_POINTER_EXCEPTION(1032, "An unexpected error occurred", BAD_REQUEST),
    INVALID_REQUEST(1033, "Invalid request", BAD_REQUEST),
    PASSWORD_NOT_MATCH(1034, "Please enter your current password correctly", BAD_REQUEST),
    OTP_INVALID(1035, "OTP invalid", BAD_REQUEST ),
    CHATGPT_API_ERROR(1036, "Connection error to ChatGPT", HttpStatus.BAD_GATEWAY),
    UNABLE_TO_GENERATE_UNIQUE_ID(1006,"User ID existed", BAD_REQUEST),
    ACCOUNT_DELETED(1037, "Your account has been deleted", BAD_REQUEST);

    private int code;
    private String message;
    private HttpStatus httpStatus;


    ErrorCode(int code, String message, HttpStatus httpStatus) {
        this.code = code;
        this.message = message;
        this.httpStatus = httpStatus;
    }


}
