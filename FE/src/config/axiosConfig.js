import axios from "axios";
import { store } from "../redux/store";

const baseUrl = "http://localhost:8080";

const apiconfig = {
  baseUrl: baseUrl,
};

const api = axios.create(apiconfig);

api.defaults.baseURL = baseUrl;

// handle before call API
const handleBefore = (config) => {
  const token = store.getState()?.user?.token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

const handleError = (error) => {
  console.log(error);
}

api.interceptors.request.use(handleBefore, handleError);

export default api;
