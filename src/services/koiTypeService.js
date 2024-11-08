import axios from "../config/axiosConfig.js";
import { toast } from "react-toastify";

const getAllKoiType = async () => {
    try {
        const response = await axios.get('koiType');
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

const createNewKoiType = async (payload) => {
    try {
        const response = await axios.post('koiType', payload);
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export {getAllKoiType, createNewKoiType};
