import { useDispatch } from "react-redux";
import { logout } from "../redux/Slices/userSlice";

const saveToken = (token, role, expiryTimeInMinute) => {
    const currentTime = new Date();
    const expiry = currentTime.getTime() + expiryTimeInMinute * 60 * 1000; //dat thoi gian het han cho token duoi dang mili second

    const tokenData = {
        token,
        role,
        expiry
    };

    localStorage.setItem('accessToken', JSON.stringify(tokenData));
}


const getToken = () => {
    const tokenDataString = localStorage.getItem('accessToken');
    if (!tokenDataString) return null;

    const tokenData = JSON.parse(tokenDataString);
    const now = new Date();

    // Kiểm tra nếu token đã hết hạn
    if (now.getTime() > tokenData.expiry) {
        localStorage.removeItem('accessToken');
        const dispatch = useDispatch();
        dispatch(logout())
        return null;
    }

    return tokenData.token;
};

export {saveToken, getToken};