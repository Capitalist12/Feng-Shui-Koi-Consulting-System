package com.example.Feng_Shui_Koi_Consulting_System.exception;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    USER_EXIST(1001,"User existed"),
    EMAIL_EXITST(1002,"Email existed"),
    USER_NOT_EXIST(1003,"User not exist"),
    UNAUTHENTICATED(1004,"Unauthenticated")
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
