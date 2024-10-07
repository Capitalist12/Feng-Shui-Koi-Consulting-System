import { toast } from "react-toastify";  
import instance from "../config/axiosConfig";  

const fetchTank = async () => {  
    try {  
        const response = await instance.get('tank');  
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

const createTank = async (payload) => {  
    try {  
        const response = await instance.post('tank', payload);  
        toast.success("Tank created successfully!");  
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

const updateTank = async (id, payload) => {  
    try {  
        const response = await instance.put(`tank/${id}`, payload);  
        toast.success("Tank updated successfully!");  
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

const deleteTank = async (id) => {  
    try {  
        const response = await instance.delete(`tank/${id}`);  
        toast.success("Tank deleted successfully!"); 
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

export { fetchTank, createTank, updateTank, deleteTank };