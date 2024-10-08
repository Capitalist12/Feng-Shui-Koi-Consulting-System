import api from "../config/axiosConfig";  

const fetchTank = async () => {  
    try {  
        const response = await api.get('tank');  
        return response.data;  
    } catch (err) {  
        throw err; // Thay vì gọi toast ở đây, bạn ném lỗi ra component xử lý
    }  
}  

const createTank = async (payload) => {  
    try {  
        const response = await api.post('tank', payload);  
        return response.data;  
    } catch (err) {  
        throw err; // Ném lỗi ra component
    }  
}  

const updateTank = async (id, payload) => {  
    try {  
        const response = await api.put(`tank/${id}`, payload);  
        return response.data;  
    } catch (err) {  
        throw err; // Ném lỗi ra component
    }  
}  

const deleteTank = async (id) => {  
    try {  
        const response = await api.delete(`tank/${id}`);  
        return response.data;  
    } catch (err) {  
        throw err; // Ném lỗi ra component
    }  
}  

export { fetchTank, createTank, updateTank, deleteTank };
