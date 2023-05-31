import axios from "axios";

// const BASE_URL = "http://localhost:4200/api/";
export const BASE_URL = "https://step-server.onrender.com/api";
const user = localStorage.getItem("persist:root")?.user;
const TOKEN = user ? JSON.parse(JSON.parse(user)).currentUser.accessToken : "";

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzRmODg5ODBjZjdmN2JkYzU3YjU4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTQ1NDc5NiwiZXhwIjoxNjgxNzEzOTk2fQ.PNQKewxaPT2Gj1soYPt42fl5RUbZWzUgBW-Ox-kQBAU"

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
