import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;
const baseService = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
export default baseService;
