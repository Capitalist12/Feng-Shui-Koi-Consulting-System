const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

function timeDifference(date) {
    const now = new Date();
    const pastDate = new Date(date);
    const diff = now - pastDate;

    // Chuyển đổi chênh lệch thời gian thành phút, giờ, hoặc ngày
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    // Xác định hiển thị kết quả
    if (months > 0) {
        return `${months} tháng trước`
    } else if (days > 0) {
        return `${days} ngày trước`;
    } else if (hours > 0) {
        return `${hours} giờ trước`;
    } else if (minutes > 0) {
        return `${minutes} phút trước`;
    } else {
        return "Vừa xong";
    }
}

function compareWithCurrentTime(date) {
    const now = new Date();
    const pastDate = new Date(date);

    const diffInMilliseconds = now - pastDate;

    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    return diffInDays < 7;

}

const handleErrorMessage = (code) => {
    switch (code) {
        case 1001:
            return "Cá Koi đã tồn tại!";
        case 1002:
            return "Cá Koi không tìm thấy!";
        case 1003:
            return "Bể cá đã tồn tại!";
        case 1004:
            return "Không tìm thấy bể cá!";
        case 1005:
            return "Message key không hợp lệ!";
        case 999:
            return "Lỗi không xác định!";
        case 1006:
            return "Người dùng đã tồn tại!";
        case 1007:
            return "Email đã tồn tại!";
        case 1008:
            return "Người dùng không tồn tại!";
        case 1009:
            return "Email không tồn tại!";
        case 1010:
            return "Giống cá không tìm thấy!";
        case 1011:
            return "Chưa xác thực!";
        case 1012:
            return "Lỗi cú pháp!";
        case 1013:
            return "Tên người dùng không hợp lệ!";
        case 1014:
            return "Mật khẩu không hợp lệ!";
        case 1015:
            return "Email không hợp lệ!";
        case 1016:
            return "Bạn không có quyền truy cập!";
        case 1017:
            return "Mệnh không tồn tại!";
        case 1018:
            return "Giống cá đã tồn tại!";
        case 1019:
            return "Password đã tồn tại!";
        case 1020:
            return "Token không hợp lệ!";
        case 1021:
            return "Phiên đăng nhập đã hết hạn!";
        case 1022:
            return "Gửi mail thất bại!";
        case 1023:
            return "OTP không thấy!";
        case 1024:
            return "Bài đăng không tìm thấy!";
        case 1025:
            return "SessionID không được null!";
        case 1026:
            return "Thể loại không tìm thấy!";
        case 1027:
            return "Yêu cầu OTP!";
        case 1028:
            return "Blog không tìm thấy!";
        case 1029:
            return "Bình luận không tìm thấy!";
        case 1030:
            return "Trạng thái không hợp lệ!";
        case 1031:
            return "OpenAI API Gateway Timeout!";
        case 1032:
            return "Đã xảy ra lỗi không mong muốn!";
        case 1033:
            return "Yêu cầu không hợp lệ!";
        case 1034:
            return "Vui lòng nhập đúng mật khẩu hiện tại của bạn!";
        case 1035:
            return "Lỗi kết nối đến ChatGPT!";
        case 1036:
            return "UserID không tồn tại!";
        case 1037:
            return "Màu không tồn tại trong hệ thống!";
        case 1038:
            return "Bể cá không hợp lệ!";
        case 1039:
            return "Mệnh không hợp lệ!";
        case 1040:
            return "Tên không được chứa các ký tự đặc biệt hoặc số và không được để trống!";
        case 1041:
            return "Đăng ký của bạn vẫn còn hiệu lực, vui lòng gia hạn sau khi hết hạn!";
        case 1042:
            return "Định dạng hoặc nội dung yêu cầu của API ChatGPT không hợp lệ!";
        case 1043:
            return "Gói của bạn vẫn còn hạn!";
        case 1044:
            return "Thiếu API key của ChatGPT!";
        case 1045:
            return "Khóa API đã hết hạn hoặc không được gia hạn!";
        default:
            return "Lỗi bất định!";
    }
}

function formatCurrencyVND(number) {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  


export { handleScroll, timeDifference, compareWithCurrentTime, handleErrorMessage, formatCurrencyVND };