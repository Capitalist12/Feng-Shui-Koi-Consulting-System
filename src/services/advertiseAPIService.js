import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const getAllAdvertises = async () => {
    try {
        const response = await axios.get('ad');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}
const getVerifiedAdvertise = async () => {
    try {
        const response = await axios.get('ad/verified');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const getRejectedAdvertise = async () => {
    try {
        const response = await axios.get('ad/rejected');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const getPendingAdvertises = async () => {
    try {
        const response = await axios.get('ad/pending');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

const updateAdvertiseStatus = async (payload) => {
    try {
        const response = await axios.post('ad/updateAdStatus', payload);
        return response;
    } catch (err) {
        toast.error(err.message)
    }
}

const getUserAds = async () => {
    try {
        const response = await axios.get('ad/get-my-ads');
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export { getAllAdvertises, getVerifiedAdvertise, getPendingAdvertises, getRejectedAdvertise, updateAdvertiseStatus, getUserAds };