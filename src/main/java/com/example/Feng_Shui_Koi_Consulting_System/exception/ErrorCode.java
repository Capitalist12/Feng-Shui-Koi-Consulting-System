package com.example.Feng_Shui_Koi_Consulting_System.exception;

public enum ErrorCode {
    UNKNOWN_EXCEPTION(999,"Uknown error!"),
    USER_EXISTED(1001,"User Existed!"),
    USERNAME_INVALID(1002,"Username must be at least 4 characters!"),
    PASSWORD_INVALID(1003,"Password must be at least 5 characters!"),
    ENUMKEY_INVALID(1004,"Invalid Enum Key!"),
    NAME_INVALID(1005,"Name can not be blanked!")
    ;
    private int code;
    private String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
