import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getInfo = async () => {
    try{
        const response = await axios.get('users/my-info');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
} 

export {getInfo};