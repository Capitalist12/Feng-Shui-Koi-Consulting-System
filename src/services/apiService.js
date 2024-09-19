import { toast } from "react-toastify";
import axios from "../utils/axiosConfig";

const getAllKoiFish = async() => {
    try {
        const response = await axios.get('koi');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export { getAllKoiFish };