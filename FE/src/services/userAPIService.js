import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

// Lấy danh sách người dùng
const fetchUsers = async () => {
  try {
    const response = await axios.get("users");
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};

// Tạo người dùng mới
const createUser = async (payload) => {
  try {
    const response = await axios.post("users", payload);
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};


const updateUser = async (id, payload) => {
  try {
    const response = await axios.put(`users/${id}`, payload);
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};


const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`users/${id}`);
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};

const fetchUserDetails = async (userID) => {
  try {
    const response = await axios.get(`users/${userID}`);
    return response;
  } catch (err) {
    toast.error(err.message);
    throw err; // Ném lại lỗi để xử lý trong phần gọi hàm
  }
};


export { fetchUsers, createUser, updateUser, deleteUser,fetchUserDetails};
