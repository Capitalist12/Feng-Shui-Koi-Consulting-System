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
    try {  
        const response = await axios.post('koi', payload);  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

const updateKoiFish = async (id, payload) => {  
    try {  
        const response = await axios.put(`koi/${id}`, payload);  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

const deleteKoiFish = async (id) => {  
    try {  
        const response = await axios.delete(`koi/${id}`);  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

export { getAllKoiFish, createKoiFish, updateKoiFish, deleteKoiFish };