import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getBlogComments = async (blogId) => {
    try {
        const response = await axios.get(`blog/${blogId}/comments`);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const createNewComment = async (blogId, payload) => {
    try {
        const response = await axios.post(`blog/${blogId}/comments`, payload);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export { getBlogComments, createNewComment };