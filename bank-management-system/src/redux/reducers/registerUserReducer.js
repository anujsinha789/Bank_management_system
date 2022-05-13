import { createReducer } from "../utils";

const initialState = {
	userId: "",
	name: "",
	username: "",
	password: "",
	gender: "",
	email: "",
	contact: "",
	date_of_birth: "",
	loading: false,
	message: "",
	status: "",
};

export default createReducer(initialState, {
	["USER_REGISTRATION_START"]: (state) => ({
		...state,
		loading: true,
		status: "In Progress",
	}),
	["USER_REGISTRATION_SUCCESS"]: (state, payload) => ({
		...state,
		userId: payload.userId,
		name: payload.name,
		username: payload.username,
		password: payload.password,
		gender: payload.gender,
		email: payload.email,
		contact: payload.contact,
		date_of_birth: payload.date_of_birth,
		loading: false,
		status: "Success",
		message: "User Registration Successful",
	}),
	["USER_REGISTRATION_FAILED"]: (state, payload) => ({
		...state,
		loading: false,
		status: "Failed",
		message: payload,
	}),
	["RESET_DATA"]: (state) => ({
		...state,
	}),
});
