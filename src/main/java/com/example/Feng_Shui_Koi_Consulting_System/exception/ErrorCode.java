package com.example.Feng_Shui_Koi_Consulting_System.exception;

import lombok.*;
import lombok.experimental.FieldDefaults;




@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    FISH_EXISTED(1001, "Fish existed"),
    FISH_NOT_FOUND(1002, "Fish not found"),
    TANK_EXISTED(1003, "Tank existed"),
    TANK_NOT_FOUND(1004, "Tank not found"),
    INVALID_KEY(1005, "Invalid message key"),
    UNCATEGORIZED_EXCEPTION(999, "Uncategorized error"),
    USER_EXIST(1006,"User existed"),
    EMAIL_EXITST(1007,"Email existed"),
    USER_NOT_EXIST(1008,"User not exist"),
    EMAIL_NOT_EXIST(1009,"Email not exist"),
    UNAUTHENTICATED(1010,"Unauthenticated"),
    ENUMKEY_INVALID(1011,"Invalid Enum Key!"),
    USERNAME_INVALID(1012,"Invalid username"),
    PASSWORD_INVALID(1013,"Invalid password"),
    EMAIL_INVALID(1014,"Invalid email")

    ;

    int code;
    String message;


    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
