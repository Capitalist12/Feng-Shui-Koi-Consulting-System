import { toast } from "react-toastify";  
import axios from "../config/axiosConfig";  

const getAllKoiFish = async () => {
    try {
        const response = await axios.get('fish');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const createKoiFish = async (payload) => {
    const response = await axios.post('fish', payload);
    return response;
}

const updateKoiFish = async (id, payload) => {  
    try {  
        const response = await axios.put(`fish/${id}`, payload);  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

const deleteKoiFish = async (id) => {
    try {
        const response = await axios.delete(`fish/${id}`);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const getKoiFish = async (id) => {
    try{
        const response = await axios.get(`fish/${id}`);
        return response;
    }catch (err) {
        toast.error(err.message);
    }
}

const countAllKoiFish = async () => {
    const response = await getAllKoiFish();
    if (response && response.data) {
        return response.data.result.length; 
    }
    return 0; 
}

export { getAllKoiFish, createKoiFish, deleteKoiFish, updateKoiFish, getKoiFish,countAllKoiFish };