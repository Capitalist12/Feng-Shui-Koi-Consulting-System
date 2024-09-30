import axios from "../config/axiosConfig";

const login = async (payload) => {
    try {
        const response = await axios.post("auth/login", payload);
        console.log(">>>check login", response);
    } catch (err) {
        console.log(">>> login err", err);
    }
}


export {login};
