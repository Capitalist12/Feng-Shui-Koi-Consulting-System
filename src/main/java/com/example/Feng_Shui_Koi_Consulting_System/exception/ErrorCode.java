package com.example.Feng_Shui_Koi_Consulting_System.exception;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

@Getter
@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    FISH_EXISTED(1001, "Cá Koi đã tồn tại", HttpStatus.BAD_REQUEST),
    FISH_NOT_FOUND(1002, "Cá Koi không tìm thấy", HttpStatus.NOT_FOUND),
    TANK_EXISTED(1003, "Bể cá đã tồn tại", HttpStatus.BAD_REQUEST),
    TANK_NOT_FOUND(1004, "Không tìm thấy bể cá", HttpStatus.NOT_FOUND),
    INVALID_KEY(1005, "Message key không hợp lệ", HttpStatus.BAD_REQUEST),
    UNCATEGORIZED_EXCEPTION(999, "Lỗi không xác định", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXIST(1006,"Người dùng đã tồn tại", HttpStatus.BAD_REQUEST),
    EMAIL_EXITST(1007,"Email đã tồn tại", HttpStatus.BAD_REQUEST),
    USER_NOT_EXIST(1008,"Người dùng không tồn tại", HttpStatus.NOT_FOUND),
    EMAIL_NOT_EXIST(1009,"Email không tồn tại", HttpStatus.NOT_FOUND),
    KOI_TYPE_NOT_EXIST(1010,"Giống cá không tìm thấy", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1011,"Chưa xác thực", HttpStatus.UNAUTHORIZED),
    ENUMKEY_INVALID(1012,"Enum Key không hợp lệ!", HttpStatus.BAD_REQUEST),
    USERNAME_INVALID(1013,"Username không hợp lệ", HttpStatus.BAD_REQUEST),
    PASSWORD_INVALID(1014,"Password không hợp lệ", HttpStatus.BAD_REQUEST),
    EMAIL_INVALID(1015,"Email không hợp lệ", HttpStatus.BAD_REQUEST),
    UNAUTHORIZED(1016,"Bạn không có quyền truy cập", HttpStatus.FORBIDDEN),
    ELEMENT_NOT_EXIST(1017,"Mệnh không tồn tại", HttpStatus.NOT_FOUND),
    KOI_TYPE_EXIST(1018,"Giống cá đã tồn tại", HttpStatus.BAD_REQUEST),
    PASSWORD_EXIST(1019,"Password đã tồn tại", HttpStatus.BAD_REQUEST),
    INVALID_TOKEN(1020, "Token không hợp lệ", HttpStatus.BAD_REQUEST ),
    EXPIRED_TOKEN(1021, "Token đã hết hạn", HttpStatus.BAD_REQUEST),
    SEND_MAIL_FAILED(1022, "Gửi mail thất bại", HttpStatus.BAD_REQUEST ),
    OTP_NOT_FOUND(1023, "OTP không thấy", HttpStatus.BAD_REQUEST ),
    AD_NOT_EXIST(1024, "Bài đăng không tìm thấy", HttpStatus.NOT_FOUND),
    SESSION_ID_NULL(1025, "SessionID bị null", HttpStatus.BAD_REQUEST ),
    CATEGORY_NOT_EXIST(1026, "Danh mục không tìm thấy", HttpStatus.NOT_FOUND),
    OTP_REQUIRED(1027, "Yêu cầu OTP", HttpStatus.BAD_REQUEST ),
    BLOG_NOT_FOUND(1028, "Không tìm thấy BlogID", HttpStatus.BAD_REQUEST ),
    COMMENT_NOT_FOUND(1029, "Bình luận không tìm thấy", HttpStatus.BAD_REQUEST ),
    STATUS_INVALID(1030, "Trạng thái không hợp lệ", HttpStatus.BAD_REQUEST),
    CHATGPT_NOT_RESPONSE(1031, "OpenAI API Gateway Timeout", HttpStatus.GATEWAY_TIMEOUT ),
    NULL_POINTER_EXCEPTION(1032, "Đã xảy ra lỗi không mong muốn với Open AI", HttpStatus.BAD_REQUEST),
    INVALID_REQUEST(1033, "Yêu cầu không hợp lệ", HttpStatus.BAD_REQUEST),
    PASSWORD_NOT_MATCH(1034, "Vui lòng nhập đúng mật khẩu hiện tại của bạn", HttpStatus.BAD_REQUEST),
    CHATGPT_API_ERROR(1035, "Lỗi kết nối đến ChatGPT", HttpStatus.BAD_GATEWAY),
    UNABLE_TO_GENERATE_UNIQUE_ID(1036,"Không thể tạo ID tự động", HttpStatus.BAD_REQUEST),
    UNKNOWN_COLORS(1037, "Màu không tồn tại trong hệ thống", HttpStatus.NOT_FOUND),
    TANK_INVALID(1038, "Bể cá không hợp lệ", HttpStatus.BAD_REQUEST),
    ELEMENT_INVALID(1039, "Mệnh không hợp lệ", HttpStatus.BAD_REQUEST),
    NAME_INVALID(1040, "Tên không được chứa các ký tự đặc biệt hoặc số và không được để trống", HttpStatus.BAD_REQUEST),
    KOI_INVALID(1041, "Koi không hợp lệ", HttpStatus.BAD_REQUEST),
    SUBSCRIPTION_EXIST(1041, "Đăng ký của bạn vẫn còn hiệu lực, vui lòng gia hạn sau khi hết hạn", HttpStatus.BAD_REQUEST),
    INVALID_REQUEST_CHATGPT(1042, "Định dạng hoặc nội dung yêu cầu của API ChatGPT không hợp lệ.", HttpStatus.BAD_REQUEST),
    TITLE_NOT_EMPTY(1043, "Tiêu đề không thể để trống", HttpStatus.BAD_REQUEST),
    UNAUTHORIZED_GPT(1044, "Thiếu api key của chatgpt", HttpStatus.UNAUTHORIZED),
    API_KEY_EXPIRED(1045, "Khóa API đã hết hạn hoặc không được gia hạn", HttpStatus.NOT_FOUND);



    private int code;
    private String message;
    private HttpStatus httpStatus;


    ErrorCode(int code, String message, HttpStatus httpStatus) {
        this.code = code;
        this.message = message;
        this.httpStatus = httpStatus;
    }


}
