package com.example.Feng_Shui_Koi_Consulting_System.exception;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    UNKNOWN_EXCEPTION(999,"Uknown error!"),
    USER_EXIST(1001,"User existed"),
    EMAIL_EXITST(1002,"Email existed"),
    USER_NOT_EXIST(1003,"User not exist"),
    EMAIL_NOT_EXIST(1004,"Email not exist"),
    UNAUTHENTICATED(1005,"Unauthenticated"),
    ENUMKEY_INVALID(1005,"Invalid Enum Key!")
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
