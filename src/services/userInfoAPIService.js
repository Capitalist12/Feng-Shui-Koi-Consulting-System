import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getInfo = async () => {
    try{
        const response = await axios.get('users/my-info');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
} 

const updateDob = async (newDob) => {
    try {
        const response = await axios.post('users/create-dob', {
            dateOfBirth: newDob
         })
         return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const updatePassword = async (newPassword) => {
    try {
        const response = await axios.post('users/create-password', {
            password: newPassword
         })
         return response;
    } catch (err) {
        toast.error(err.message);
    }
}
const updateUserInfo = async (userInfo) => {
    try {
        const response = await axios.put('users/update-info', userInfo);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export { getInfo, updateDob, updatePassword, updateUserInfo };
