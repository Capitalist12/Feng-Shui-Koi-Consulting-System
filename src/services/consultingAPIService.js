import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const calculateElement = async(dob) => {
    try{
        const response = await axios.post('calculate', dob);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export {calculateElement};