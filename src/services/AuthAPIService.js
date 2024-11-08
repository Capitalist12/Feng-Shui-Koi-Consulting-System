import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const loginAuth = async (payload) => {
  try {
    const response = await axios.post("auth/login", payload);
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
      const { code, message } = err.response.data;
      if (code) {
        toast.error(message);
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } else {
      toast.error("Không thể kết nối đến máy chủ.");
    }
  }
};

const googleLogin = async (authToken) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/auth/outbound/authentication?code=${authToken}`
    );
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
      const { code, message } = err.response.data;
      if (code) {
        toast.error(message);
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } else {
      toast.error("Không thể kết nối đến máy chủ.");
    }
  }
};

const verifyEmail = async (email) => {
  try {
    const response = await axios.post("auth/verify-email", { email: email });
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
      const { code, message } = err.response.data;
      if (code) {
        toast.error(message);
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } else {
      toast.error("Không thể kết nối đến máy chủ.");
    }
  }
};

const signup = async (payload) => {
  try {
    const response = await axios.post("auth/signup", payload);
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
      const { code, message } = err.response.data;
      if (code) {
        toast.error(message);
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } else {
      toast.error("Không thể kết nối đến máy chủ.");
    }
  }
};

const resetPassword = async (payload) => {
  try {
    const response = await axios.post("auth/reset-password", payload);
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
      const { code, message } = err.response.data;
      if (code) {
        toast.error(message);
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } else {
      toast.error("Không thể kết nối đến máy chủ.");
    }
  }
};

const logoutAuth = async (payload) => {
  try {
    const response = await axios.post("auth/logout", payload);
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
      const { code, message } = err.response.data;
      if (code) {
        toast.error(message);
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } else {
      toast.error("Không thể kết nối đến máy chủ.");
    }
  }
};

export {
  loginAuth,
  googleLogin,
  verifyEmail,
  signup,
  resetPassword,
  logoutAuth,
};
