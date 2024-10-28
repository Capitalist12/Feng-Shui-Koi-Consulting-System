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

export { handleScroll, timeDifference, compareWithCurrentTime };