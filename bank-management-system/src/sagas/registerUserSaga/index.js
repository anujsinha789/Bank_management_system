/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
	userRegistrationFailed,
	userRegistrationStart,
	userRegistrationSuccess,
} from "../../redux/actions/registerUser";
import { loginUserSuccess } from "../../redux/actions/authentication";

const callApi = (data) => {
	const bodyFormData = new FormData();
	bodyFormData.append("name", data.name);
	bodyFormData.append("username", data.username);
	bodyFormData.append("password", data.password);
	bodyFormData.append("guardian_type", data.guardian_type);
	bodyFormData.append("guardian_name", data.guardian_name);
	bodyFormData.append("address", data.address);
	bodyFormData.append("citizenship", data.citizenship);
	bodyFormData.append("state", data.state);
	bodyFormData.append("country", data.country);
	bodyFormData.append("gender", data.gender);
	bodyFormData.append("martial_status", data.martial_status);
	bodyFormData.append("email", data.email);
	bodyFormData.append("contact", data.contact);
	bodyFormData.append("date_of_birth", data.date_of_birth);
	bodyFormData.append("account_type", data.account_type);
	bodyFormData.append("branch_name", data.branch_name);

	return axios({
		method: "post",
		url: "http://localhost:4000/registerUser",
		data: bodyFormData,
		headers: { "Content-Type": "multipart/form-data" },
	});
};

function* handleUserRegistrationStartEvents(action) {
	try {
		yield put(userRegistrationStart());
		yield delay(2000);
		const response = yield call(callApi, action.payload);
		if (response.data.userRegistered) {
			yield put(userRegistrationSuccess(response.data));
			yield put(loginUserSuccess(response.data));
		} else yield put(userRegistrationFailed(response.data.message));
	} catch (err) {
		yield put(userRegistrationFailed("Data Validation Failed!"));
	}
}

export function* watchForUserRegistrationStartEvents() {
	yield takeLatest("REGISTER_USER", handleUserRegistrationStartEvents);
}
