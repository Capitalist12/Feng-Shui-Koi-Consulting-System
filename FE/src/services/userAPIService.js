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

// Cập nhật thông tin người dùng
const updateUser = async (id, payload) => {
  try {
    const response = await axios.put(`users/${id}`, payload);
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};

// Xóa người dùng
const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`users/${id}`);
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};

// Lấy tất cả vai trò (Roles)
const getAllRoles = async () => {
  try {
    const response = await axios.get("roles");
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};

// Lấy tất cả các gói (Plans)
const getAllPlans = async () => {
  try {
    const response = await axios.get("plans");
    return response;
  } catch (err) {
    toast.error(err.message);
  }
};

export { fetchUsers, createUser, updateUser, deleteUser, getAllRoles, getAllPlans };
