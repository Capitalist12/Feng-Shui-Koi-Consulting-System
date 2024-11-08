import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getAllAdvertises = async () => {
  try {
    const response = await axios.get("ad");
    return response;
  } catch (err) {
    toast.error(err.response.data);
  }
};
const getVerifiedAdvertise = async () => {
  try {
    const response = await axios.get("ad/verified");
    return response;
  } catch (err) {
    toast.error(err.response.data);
  }
};

const getRejectedAdvertise = async () => {
  try {
    const response = await axios.get("ad/rejected");
    return response;
  } catch (err) {
    toast.error(err.response.data);
  }
};

const getPendingAdvertises = async () => {
  try {
    const response = await axios.get("ad/pending");
    return response;
  } catch (err) {
    toast.error(err.response.data);
  }
};

const updateAdvertiseStatus = async (payload) => {
  try {
    const response = await axios.post("ad/updateAdStatus", payload);
    return response;
  } catch (err) {
    toast.error(err.response.data);
  }
};

const getUserAds = async () => {
  try {
    const response = await axios.get("ad/get-my-ads");
    return response;
  } catch (err) {
    toast.error(err.response.data);
  }
};

const getAdsByID = async (adID) => {
  try {
    const response = await axios.get(`ad/${adID}`);
    return response;
  } catch (err) {
    toast.error(err.response.data);
  }
};

const postAd = async (values) => {
  try {
    const response = await axios.post("/ad", {
      title: values.title,
      description: values.description,
      price: values.price,
      element: values.element,
      categoryName: values.categoryName,
      imagesURL: values.imagesURL || [],
    });
    return response; // Trả về phản hồi thành công
  } catch (err) {
    if (err.response && err.response.data) {
      // Trả về lỗi từ backend để xử lý trong handleAdSubmit
      throw new Error(
        err.response.data.message || "Có lỗi xảy ra. Vui lòng thử lại."
      );
    } else {
      throw new Error("Không thể kết nối đến máy chủ.");
    }
  }
};

export {
  getAllAdvertises,
  getVerifiedAdvertise,
  getPendingAdvertises,
  getRejectedAdvertise,
  updateAdvertiseStatus,
  getUserAds,
  getAdsByID,
  postAd,
};
