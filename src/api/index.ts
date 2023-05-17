import axios, { AxiosInstance } from "axios";

const params = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const httpClient = axios.create(params);

const api = (httpClient: AxiosInstance) => {
  return {
    get: <T>(url: string) => httpClient.get<T>(url),
  };
};

export default api(httpClient);
