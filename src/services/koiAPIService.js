import { toast } from "react-toastify";
import axios from "../utils/axiosConfig";

const getAllKoiFish = async () => {
    try {
        const response = await axios.get('koi');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const createKoiFish = async (payload) => {
    const response = await axios.post('koi', payload);
    return response;
}

const updateKoiFish = async (payload) => {
    const response = await axios.put();
}

const deleteKoiFish = async (id) => {
    const response = await axios.delete();
}

export { getAllKoiFish, createKoiFish };