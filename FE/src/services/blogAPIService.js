import { toast } from "react-toastify";
import axios from "../config/axiosConfig";
import { handleErrorMessage } from "../utils/helper";

const getAllBlogs = async () => {
    try {
        const response = await axios.get("blog");
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const createNewBlog = async (payload) => {
    try {
        const response = await axios.post("blog", payload);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const getBlogById = async (id) => {
    try{
        const response = await axios.get(`blog/${id}`);
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

const deleteBlog = async (id) => {
    try {
        const response = await axios.delete(`/blog/${id}`);
        return response;

    } catch (err) {
       toast.error(handleErrorMessage(err.response.data.code));
    }
}

const updateBlog = async (id, payload) => {
    try {
        const response = await axios.put(`/blog/${id}`, payload);
        return response;
    } catch (err) {
       toast.error(handleErrorMessage(err.response.data.code));
    }
}

export { getAllBlogs, createNewBlog, getBlogById, deleteBlog, updateBlog };