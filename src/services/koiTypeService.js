import axios from "../utils/axiosConfig.js";
import { toast } from "react-toastify";

const getAllKoiType = async () => {
    try {
        const response = await axios.get('koiType');
        return response;
    } catch (err) {
        toast.error(err);
    }
}

const createNewKoiType = async (payload) => {
    try {
        const response = await axios.post('koiType', payload);
        return response;
    } catch (err) {
        toast.error(err);
    }
}

export {getAllKoiType, createNewKoiType};
