import axios from "axios";
import { getToken, removeTokens } from "@/utils/token";

export const api = axios.create({
  baseURL: "https://4b98-93-183-85-60.ngrok-free.app/api",
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["ngrok-skip-browser-warning"] = "true";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if ([401].includes(error.response.status)) {
      removeTokens();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default api;
