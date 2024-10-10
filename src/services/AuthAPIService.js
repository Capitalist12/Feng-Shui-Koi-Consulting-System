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
    try{
        const response = await axios.post(`http://localhost:8080/auth/outbound/authentication?code=${authToken}`)
        return response;
    } catch(err) {
        toast.error("Đăng nhập thất bại");
        return err;
    }
}


export {loginAuth, googleLogin};
