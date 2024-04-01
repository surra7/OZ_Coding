import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "e58b5d39c12cb66d482e372ddd70d5b7",
        language: "ko-KR"
    }
})

export default instance;