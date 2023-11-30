import axios, { AxiosResponse, AxiosError } from "axios";

export const getUserData = async (): Promise<any> => {
  const url = "http://localhost:3000/api/v1/users";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AxiosError:", error.message);
      throw error;
    } else {
      console.log("Unknown Error:", error);
      throw error;
    }
  }
};