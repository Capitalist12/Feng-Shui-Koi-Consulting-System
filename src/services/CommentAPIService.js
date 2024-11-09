import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getBlogComments = async (blogId) => {
    try {
        const response = await axios.get(`blog/${blogId}/comments`);
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

const createNewComment = async (blogId, payload) => {
    try {
        const response = await axios.post(`blog/${blogId}/comments`, payload);
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

const deleteComment = async (blogId, commentID) => {
    try {
        const response = await axios.delete(`blog/${blogId}/comments/${commentID}`);
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

const updateComment = async (blogId, commentID, payload) => {
    try {
        const response = await axios.put(`blog/${blogId}/comments/${commentID}`, payload);
        return response;
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export { getBlogComments, createNewComment, deleteComment, updateComment };