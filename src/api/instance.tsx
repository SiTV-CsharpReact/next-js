import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:8480/Data"
});
export default instance;