import { toast } from "react-toastify";
import axios from "../config/axiosConfig";
import { handleErrorMessage } from "../utils/helper";

const loginAuth = async (payload) => {
  try {
    const response = await axios.post("auth/login", payload);
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const googleLogin = async (authToken) => {
  try {
    const response = await axios.post(
      `auth/outbound/authentication?code=${authToken}`
    );
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const verifyEmail = async (email) => {
  try {
    const response = await axios.post("auth/verify-email", { email: email });
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const signup = async (payload) => {
  try {
    const response = await axios.post("auth/signup", payload);
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const resetPassword = async (payload) => {
  try {
    const response = await axios.post("auth/reset-password", payload);
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const logoutAuth = async (payload) => {
  try {
    const response = await axios.post("auth/logout", payload);
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
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
