const { default: axios } = require("axios");

const BASE_URL = "http://localhost:5000/";
export const axiosRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credential": true,
  },
});
