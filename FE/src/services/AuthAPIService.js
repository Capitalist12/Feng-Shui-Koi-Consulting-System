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


export {loginAuth};
