import { toast } from "react-toastify";
import api from "../config/axiosConfig";  

const fetchTank = async () => {
    try {
        const response = await api.get('tank');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const createTank = async (payload) => {
    const response = await api.post('tank', payload);
    return response;
}

const updateTank = async (id, payload) => {  
    try {  
        const response = await api.put(`tank/${id}`, payload);  
        return response;
    } catch (err) {  
        toast.error(err.message);
    }  

}  
const deleteTank = async (id) => {  
    try {  
        const response = await api.delete(`tank/${id}`);  
        return response;  
    } catch (err) {  
        toast.error(err.message); // Ném lỗi ra component
    }  
}  

export { fetchTank, createTank, updateTank, deleteTank };
