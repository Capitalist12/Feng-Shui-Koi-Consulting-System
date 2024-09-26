package com.example.Feng_Shui_Koi_Consulting_System.exception;

import lombok.*;
import lombok.experimental.FieldDefaults;




@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    FISH_EXISTED(1001, "Fish existed"),
    FISH_NOT_FOUND(1002, "Fish not found"),
    TANK_EXISTED(1003, "Tank existed"),
    TANK_NOT_FOUND(1004, "Tank not found"),
    TYPE_EXISTED(1005, "Type existed"),
    TYPE_NOT_FOUND(1006, "Type not found"),
    INVALID_KEY(1007, "Invalid message key"),
    UNCATEGORIZED_EXCEPTION(999, "Uncategorized error"),
    USER_EXIST(1008,"User existed"),
    EMAIL_EXITST(1009,"Email existed"),
    USER_NOT_EXIST(1010,"User not exist"),
    EMAIL_NOT_EXIST(1011,"Email not exist"),
    UNAUTHENTICATED(1012,"Unauthenticated"),
    ENUMKEY_INVALID(1013,"Invalid Enum Key!"),
    USERNAME_INVALID(1014,"Invalid username"),
    PASSWORD_INVALID(1015,"Invalid password"),
    EMAIL_INVALID(1016,"Invalid email")

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
