import axios from "axios";
import { baseURL } from "@/constants/url";
import ResponseError, { isApiErrorResponse } from "./ResponseError";
import { UNKNOWN_RESPONSE } from "@/constants/unknownResponse";
import { Instance } from "@/tpyes/api";

const instance = axios.create({
    baseURL,
});

instance.interceptors.request.use(async (config) => {
config.headers.Authorization = localStorage.getItem("DC-AccessToken")
    ? `Bearer ${localStorage.getItem("DC-AccessToken")}`
    : "";

return config;
});

instance.interceptors.response.use(undefined, (error) => {
    const { response = { ...UNKNOWN_RESPONSE } } = error;
    return Promise.reject(response.data?.code ? response.data : response);
});

const createRequest: Instance = async ({ method, endpoint, body }) => {
    try {
      const { data, status } = await instance({
        method,
        url: `${endpoint}`,
        data: body,
      });
  
      if (status !== 200) {
        throw data;
      }
  
      return data;
    } catch (e) {
      if (isApiErrorResponse(e)) {
        throw new ResponseError(e);
      }
      throw e;
    }
  };
  
  export default createRequest;