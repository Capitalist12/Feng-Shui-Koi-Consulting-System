import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const calculateElement = async (dob) => {
    try {
        const response = await axios.post('calculate', dob);
        return response;
    } catch (err) {
        return err;
    }
}

const consultingKoi = async (payload) => {
    try {
        const response = await axios.post('consulting', payload);
        return response;
    } catch (err) {
        toast.error(err.response.data);
    }
}

export { calculateElement, consultingKoi };