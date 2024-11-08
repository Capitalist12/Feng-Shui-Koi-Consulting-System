import { toast } from "react-toastify";
import axios from "../config/axiosConfig";

const buyPackage = async (time) => {
    try {
        const response = await axios.post('session/subscription', {
            data: {
                PACKAGE: time.toUpperCase(),
            }
        });
        return response;
    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            toast.error(err.response.data.message);
        } else {
            toast.error("Lỗi kế nối !");
        }
    }
};


const buyPackageSuccess = async (uid, sessId) => {
    try {
        const response = await axios.put('payment-success', {
            userID: uid,
            sessionID: sessId
        });
        return response;
    } catch (err) {
        toast.error(err.message);
    }
}

export { buyPackage, buyPackageSuccess };