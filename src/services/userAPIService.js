import { toast } from "react-toastify";  
import axios from "../utils/axiosConfig";  

const fetchUsers = async () => {  
    try {  
        const response = await axios.get('users');  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

const createUser = async (payload) => {  
    try {  
        const response = await axios.post('users', payload);  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

const updateUser = async (id, payload) => {  
    try {  
        const response = await axios.put(`users/${id}`, payload);  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

const deleteUser = async (id) => {  
    try {  
        const response = await axios.delete(`users/${id}`);  
        return response;  
    } catch (err) {  
        toast.error(err.message);  
    }  
}  

export { fetchUsers, createUser, updateUser, deleteUser };