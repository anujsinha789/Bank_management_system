/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
	loginUserStarted,
	loginUserSuccess,
	loginUserFailed,
} from "../../redux/actions/authentication";

const callApi = (data) => {
	const bodyFormData = new FormData();
	bodyFormData.append("emailId", data.emailId);
	bodyFormData.append("password", data.password);
	return axios({
		method: "post",
		url: "http://localhost:4000/authenticateUser",
		data: bodyFormData,
		headers: { "Content-Type": "multipart/form-data" },
	});
};

function* handleAuthenticateUserStartEvents(action) {
	try {
		yield put(loginUserStarted());
		yield delay(2000);
		const response = yield call(callApi, action.payload);
		console.log(response);
		if (response.data.isAuthenticated) {
			yield put(loginUserSuccess(response.data));
		} else yield put(loginUserFailed());
	} catch (err) {
		yield put(loginUserFailed());
	}
}

export function* watchForAuthenticateUserStartEvents() {
	yield takeLatest("AUTHENTICATE_USER", handleAuthenticateUserStartEvents);
}
