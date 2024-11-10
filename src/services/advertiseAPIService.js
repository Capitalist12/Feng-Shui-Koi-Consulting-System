import { toast } from "react-toastify";
import axios from "../config/axiosConfig";
import { handleErrorMessage } from "../utils/helper";

const getAllAdvertises = async () => {
  try {
    const response = await axios.get("ad");
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};
const getVerifiedAdvertise = async () => {
  try {
    const response = await axios.get("ad/verified");
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const getRejectedAdvertise = async () => {
  try {
    const response = await axios.get("ad/rejected");
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const getPendingAdvertises = async () => {
  try {
    const response = await axios.get("ad/pending");
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const updateAdvertiseStatus = async (payload) => {
  try {
    const response = await axios.post("ad/updateAdStatus", payload);
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const getUserAds = async () => {
  try {
    const response = await axios.get("ad/get-my-ads");
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const getAdsByID = async (adID) => {
  try {
    const response = await axios.get(`ad/${adID}`);
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
  }
};

const deleteAds = async (adID) => {
  try {
    const response = await axios.delete(`ad/${adID}`);
    return response;
  } catch (err) {
    toast.error(handleErrorMessage(err.response.data.code));
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
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
      throw new Error(
        err.response.data.message || "Có lỗi xảy ra. Vui lòng thử lại."
      );
    } else {
      throw new Error("Không thể kết nối đến máy chủ.");
    }
  }
};

const editAd = async (id) => {
  try {
    const response = await axios.put(`ad/${id}`,{
      title: values.title,
      description: values.description,
      price: values.price,
      element: values.element,
      categoryName: values.categoryName,
      imagesURL: values.imagesURL || [],
    });
    return response;
  } catch (err) {
    if (err.response && err.response.data) {
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
  editAd,
  deleteAds
};
