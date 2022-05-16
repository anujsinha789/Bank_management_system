import { createReducer } from "../utils";

const initialState = {
	username: "",
	userId: "",
	loading: false,
	operation: "",
	isAuthenticated: null,
};

export default createReducer(initialState, {
	["LOGIN_USER_STARTED"]: (state, payload) => ({
		...state,
		operation: "login",
		loading: true,
	}),
	["LOGIN_USER_SUCCESS"]: (state, payload) => ({
		...state,
		username: payload.username,
		userId: payload.userId,
		operation: "login",
		loading: false,
		isAuthenticated: true,
	}),
	["LOGIN_USER_FAILED"]: (state, payload) => ({
		...state,
		username: "",
		userId: "",
		operation: "login",
		loading: false,
		isAuthenticated: false,
	}),
	["LOGOUT_USER"]: (state, payload) => ({
		...state,
		operation: "logout",
		loading: true,
		isAuthenticated: false,
		userName: "",
		userId: "",
	}),
	["RESET_DATA"]: (state) => ({
		...state,
		username: "",
		userId: "",
		loading: false,
		operation: "",
		isAuthenticated: null,
	}),
});
