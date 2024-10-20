import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getAllBlogs = async () => {
    try {
        const response = await axios.get("blog");
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const createNewBlog = async (payload) => {
    try {
        const response = await axios.post("blog", payload);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const getBlogById = async (id) => {
    try{
        const response = await axios.get(`blog/${id}`);
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export { getAllBlogs, createNewBlog, getBlogById };