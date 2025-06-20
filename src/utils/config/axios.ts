import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	timeout: 5000,
});
