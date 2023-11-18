import axios from "axios";

export const axiosInstance = axios.create({});
const BaseUrl = "http://localhost:5000/api/v1/user";
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${BaseUrl}${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
