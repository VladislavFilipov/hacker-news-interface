import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// type CustomAxiosError = AxiosError<{ apierror: { message: string } }>;

// const getCustomError = (error: AxiosError) => {
//   try {
//     const message = (error as CustomAxiosError).response?.data.apierror.message;
//     if (!message) throw new Error(error.message);
//     return message;
//   } catch (e) {
//     return error.message;
//   }
// };

export const baseURL = "https://hacker-news.firebaseio.com/v0";

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  try {
    const res: AxiosResponse = await axios<T>(options);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default request;
