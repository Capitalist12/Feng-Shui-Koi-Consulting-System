import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const loginAuth = async (payload) => {
    try {
        const response = await axios.post("auth/login", payload);
        return response;
    } catch (err) {
        toast.error(err.response?.data?.message || err.message);
        throw err;
    }
}

const googleLogin = async (authToken) => {
    try {
        const response = await axios.post(`auth/outbound/authentication?code=${authToken}`);
        return response;
    } catch (err) {
        toast.error("Đăng nhập thất bại");
        throw err;
    }
}

const verifyEmail = async (email) => {
    try {
        const response = await axios.post('auth/verify-email', { email: email });
        return response;
    } catch (err) {
        toast.error(err.response?.data?.message || err.message);
        throw err;
    }
}

const signup = async (payload) => {
    try {
        const response = await axios.post('auth/signup', payload);
        return response;
    } catch (err) {
        toast.error(err.response?.data?.message || err.message);
        throw err;
    }
}

const resetPassword = async (payload) => {
    try {
        const response = await axios.post('auth/reset-password', payload);
        return response;
    } catch (err) {
        toast.error(err.response?.data?.message || err.message);
        throw err;
    }
}

const logoutAuth = async (payload) => {
    try {
        const response = await axios.post('auth/logout', payload);
        return response;
    } catch (err) {
        toast.error(err.response?.data?.message || err.message);
        throw err;
    }
}

export { loginAuth, googleLogin, verifyEmail, signup, resetPassword, logoutAuth };
