import { toast } from "react-toastify";
import axios from "../config/axiosConfig";
import { handleErrorMessage } from "../utils/helper";

const getBlogComments = async (blogId) => {
    try {
        const response = await axios.get(`blog/${blogId}/comments`);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const createNewComment = async (blogId, payload) => {
    try {
        const response = await axios.post(`blog/${blogId}/comments`, payload);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const deleteComment = async (blogId, commentID) => {
    try {
        const response = await axios.delete(`blog/${blogId}/comments/${commentID}`);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const updateComment = async (blogId, commentID, payload) => {
    try {
        const response = await axios.put(`blog/${blogId}/comments/${commentID}`, payload);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

export { getBlogComments, createNewComment, deleteComment, updateComment };