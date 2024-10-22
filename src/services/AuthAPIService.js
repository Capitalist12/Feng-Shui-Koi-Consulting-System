import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const loginAuth = async (payload) => {
    try {
        const response = await axios.post("auth/login", payload);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const googleLogin = async (authToken) => {
    try {
        const response = await axios.post(`http://localhost:8080/auth/outbound/authentication?code=${authToken}`)
        return response;
    } catch (err) {
        toast.error("Đăng nhập thất bại");
        return err;
    }
}

const verifyEmail = async (email) => {
    try {
        const response = await axios.post('auth/verify-email', { email: email } );
        return response;
    } catch (err) {
        toast.error(err.message);
        return err;
    }
}

const signup = async (payload) => {
    try {
        const response = await axios.post('auth/signup', payload);
        return response;
    } catch (err) {
        toast.error(err.message);
        return err;
    }
}

const resetPassword = async (payload) => {
    try {
        const response = await axios.post('auth/reset-password', payload);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}


export { loginAuth, googleLogin, verifyEmail, signup, resetPassword };
