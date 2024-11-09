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

const deleteKoiType = async (id) => {
    try {
        const response = await axios.delete(`koiType/${id}`);
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

const updateKoiType = async (id, payload) => {
    try {
        const response = await axios.put(`koiType/${id}`, payload);
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export {getAllKoiType, createNewKoiType, deleteKoiType, updateKoiType};
