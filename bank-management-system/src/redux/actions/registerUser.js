export const registerUser = (data) => ({
	type: "REGISTER_USER",
	payload: data,
});

export const userRegistrationStart = (data) => ({
	type: "USER_REGISTRATION_START",
	payload: data,
});

export const userRegistrationFailed = (data) => ({
	type: "USER_REGISTRATION_FAILED",
	payload: data,
});

export const userRegistrationSuccess = (data) => ({
	type: "USER_REGISTRATION_SUCCESS",
	payload: data,
});
