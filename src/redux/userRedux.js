import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		start: (state) => {
			state.isFetching = true;
		},
		failure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		registerSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		logout: (state) => {
			state.currentUser = null;
		},
	},
});

export const { start, loginSuccess, registerSuccess, failure, logout } =
	userSlice.actions;
export default userSlice.reducer;
