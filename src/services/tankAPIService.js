import { toast } from "react-toastify";  
import axios from "../utils/axiosConfig";  

const fetchTank = async () => {  
    try {  
        const response = await axios.get('tank');  
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

const createTank = async (payload) => {  
    try {  
        const response = await axios.post('tank', payload);  
        toast.success("Tank created successfully!");  
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

const updateTank = async (id, payload) => {  
    try {  
        const response = await axios.put(`tank/${id}`, payload);  
        toast.success("Tank updated successfully!");  
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

const deleteTank = async (id) => {  
    try {  
        const response = await axios.delete(`tank/${id}`);  
        toast.success("Tank deleted successfully!"); 
        return response.data;  
    } catch (err) {  
        toast.error(err.response?.data?.message || err.message);  
    }  
}  

export { fetchTank, createTank, updateTank, deleteTank };