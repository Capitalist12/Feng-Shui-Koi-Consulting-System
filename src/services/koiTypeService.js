import axios from "../config/axiosConfig.js";
import { toast } from "react-toastify";
import { handleErrorMessage } from "../utils/helper.js";

const getAllKoiType = async () => {
    try {
        const response = await axios.get('koiType');
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const createNewKoiType = async (payload) => {
    try {
        const response = await axios.post('koiType', payload);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const deleteKoiType = async (id) => {
    try {
        const response = await axios.delete(`koiType/${id}`);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const updateKoiType = async (id, payload) => {
    try {
        const response = await axios.put(`koiType/${id}`, payload);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

export {getAllKoiType, createNewKoiType, deleteKoiType, updateKoiType};
