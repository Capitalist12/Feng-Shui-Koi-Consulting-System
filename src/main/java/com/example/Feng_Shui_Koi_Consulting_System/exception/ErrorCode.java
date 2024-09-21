package com.example.Feng_Shui_Koi_Consulting_System.exception;

public enum ErrorCode {
    FISH_EXISTED(1001, "Fish existed"),
    FISH_NOT_FOUND(1002, "Fish not found"),
    TANK_EXISTED(1003, "Tank existed"),
    TANK_NOT_FOUND(1004, "Tank not found"),
    INVALID_KEY(1006, "Invalid message key"),
    UNCATEGORIZED_EXCEPTION(999, "Uncategorized error");

    private int code;
    private String message;

    private ErrorCode(int code, String message){
        this.code = code;
        this.message = message;
    }

    public String getMessage(){
        return message;
    }

    public int getCode() {
        return code;
    }
}
