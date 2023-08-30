import axios, { AxiosError } from "axios";

const baseUrl = "https://shopazanyb2b.urbantour.org/api/";

const callAPI = async (
  url: string,
  method: string,
  body: any,
  headers: any = {
    "Content-Type": "application/json",
  }
) => {
  try {
    const response = await axios({
      url: `${baseUrl}${url}`,
      method,
      headers,
      data: body,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 404) {
      window.location.pathname = "/404";
    }
    // if (axiosError.response && axiosError.response.status === 500) {
    //   window.location.pathname = "/500";
    // }
    if (axiosError.response && axiosError.response.status === 403) {
      window.location.pathname = "/403";
    }
   
    throw error;
  }
};

export default callAPI;
