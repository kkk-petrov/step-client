import { publicRequest } from "../requestMethods";
import { failure, start, loginSuccess, registerSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
	dispatch(start());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(failure());
	}
};

export const register = async (dispatch, user) => {
	dispatch(start());
	try {
		const res = await publicRequest.post(`/auth/register`, user);
		dispatch(registerSuccess(res.data));
	} catch (err) {
		dispatch(failure(err));
	}
};
