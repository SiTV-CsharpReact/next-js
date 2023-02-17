import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:8480/api/stock/v1/report"
});
export default instance;