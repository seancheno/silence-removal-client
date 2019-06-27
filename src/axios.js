import axios from "axios";
import { AXIOS_BASE_URL } from "./config";

const instance = axios.create({
	baseURL: AXIOS_BASE_URL,
});

instance.defaults.headers.common["Authorization"] = "AUTHO TOKEN FROM INSTANCE";

export default instance;
