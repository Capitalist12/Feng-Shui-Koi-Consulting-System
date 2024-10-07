import axios from "axios";
const baseUrl = "http://localhost:8080";

const config = {
  baseUrl: baseUrl,
};

const api = axios.create(config);

api.defaults.baseURL = baseUrl;

// handle before call API
const handleBefore = (config) => {
  //handle hanh dong trc khi call api
  //lay ra cai token va dinh kem theo cai request
  const token = localStorage.getItem("token")?.replaceAll('"', "");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};

const handleError = (error) => {
  console.log(error);
} 

api.interceptors.request.use(handleBefore, handleError);

export default api;
