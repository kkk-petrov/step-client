import axios from "axios";

// export const BASE_URL = "http://localhost:4200/api";
export const BASE_URL = "https://step-server.onrender.com/api";
const user = localStorage.getItem("persist:root")?.user;
const TOKEN = user ? JSON.parse(JSON.parse(user)).currentUser.accessToken : "";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
