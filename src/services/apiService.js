import axios from "../utils/axiosConfig";

const getAllKoiFish = async() => {
    const response = await axios.get('koi');
    return response;
}

export { getAllKoiFish };