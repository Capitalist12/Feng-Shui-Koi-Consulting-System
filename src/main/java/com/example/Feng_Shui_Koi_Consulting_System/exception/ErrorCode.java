package com.example.Feng_Shui_Koi_Consulting_System.exception;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

@Getter
@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    FISH_EXISTED(1001, "Fish existed", HttpStatus.BAD_REQUEST),
    FISH_NOT_FOUND(1002, "Fish not found", HttpStatus.NOT_FOUND),
    TANK_EXISTED(1003, "Tank existed", HttpStatus.BAD_REQUEST),
    TANK_NOT_FOUND(1004, "Tank not found", HttpStatus.NOT_FOUND),
    INVALID_KEY(1005, "Invalid message key", HttpStatus.BAD_REQUEST),
    UNCATEGORIZED_EXCEPTION(999, "Uncategorized error", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXIST(1006,"User existed", HttpStatus.BAD_REQUEST),
    EMAIL_EXIST(1007,"Email existed", HttpStatus.BAD_REQUEST),
    USER_NOT_EXIST(1008,"User not exist", HttpStatus.NOT_FOUND),
    EMAIL_NOT_EXIST(1009,"Email not exist", HttpStatus.NOT_FOUND),
    KOI_TYPE_NOT_EXIST(1010,"KoiType not exist", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1011,"Unauthenticated", HttpStatus.UNAUTHORIZED),
    ENUMKEY_INVALID(1012,"Invalid Enum Key!", HttpStatus.BAD_REQUEST),
    USERNAME_INVALID(1013,"Invalid username", HttpStatus.BAD_REQUEST),
    PASSWORD_INVALID(1014,"Invalid password", HttpStatus.BAD_REQUEST),
    EMAIL_INVALID(1015,"Invalid email", HttpStatus.BAD_REQUEST),
    UNAUTHORIZED(1016,"You don't have permission", HttpStatus.FORBIDDEN),
    ELEMENT_NOT_EXIST(1017,"KoiType not exist", HttpStatus.NOT_FOUND),
    KOI_TYPE_EXIST(1018,"KoiType existed", HttpStatus.BAD_REQUEST)



    ;

    private int code;
    private String message;
    private HttpStatus httpStatus;


    ErrorCode(int code, String message, HttpStatus httpStatus) {
        this.code = code;
        this.message = message;
        this.httpStatus = httpStatus;
    }


}
