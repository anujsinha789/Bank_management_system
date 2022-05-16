export const loginUserStarted = (data) => ({
	type: "LOGIN_USER_STARTED",
	payload: data,
});

export const loginUserSuccess = (data) => ({
	type: "LOGIN_USER_SUCCESS",
	payload: data,
});

export const loginUserFailed = (data) => ({
	type: "LOGIN_USER_FAILED",
	payload: data,
});

export const logoutUser = (data) => ({
	type: "LOGOUT_USER",
	payload: data,
});

export const authenticateUser = (data) => ({
	type: "AUTHENTICATE_USER",
	payload: data,
});

export const resetData = () => ({
	type: "RESET_DATA",
});
