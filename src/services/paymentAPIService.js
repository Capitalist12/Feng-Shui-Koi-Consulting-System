import { toast } from "react-toastify";
import axios from "../config/axiosConfig";
import { handleErrorMessage } from "../utils/helper";

const buyPackage = async (time) => {
    try {
        const response = await axios.post('session/subscription', {
            data: {
                PACKAGE: time.toUpperCase(),
            }
        });
        return response;
    } catch (err) {
        toast.error(handleErrorMessage(err.response.data.code));
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
        toast.error(handleErrorMessage(err.response.data.code));
    }
}

export { buyPackage, buyPackageSuccess };