import axios from "axios";
const instance = axios.create({
	baseURL: "https://abu-evangadiforum-backend.onrender.com/api",

	// baseURL: "http://localhost:7700/api"
});
export default instance;
