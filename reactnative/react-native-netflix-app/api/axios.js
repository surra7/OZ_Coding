import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.THE_MOVIE_API_KEY,
    language: "ko-KR",
  },
});

export default axiosInstance;
