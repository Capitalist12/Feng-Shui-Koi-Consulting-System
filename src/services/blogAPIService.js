import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getAllBlogs = async () => {
    try {
        const response = await axios.get("");
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const createNewBlog = async (payload) => {
    try {
        const response = await axios.post("", payload);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const getBlogById = async (id) => {
    try{
        const response = await axios.get(`url/${id}`);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export { getAllBlogs, createNewBlog, getBlogById };