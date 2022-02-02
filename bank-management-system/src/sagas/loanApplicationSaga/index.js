/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
	loanApplicationDataValidationFailed,
	loanApplicationDataValidationStart,
	loanApplicationDataValidationSuccess,
} from "../../redux/actions/loanApplication";

const callApi = (data) => {
	const bodyFormData = new FormData();
	bodyFormData.append("userId", data.userId);
	bodyFormData.append("loan_amount", data.loan_amount);
	bodyFormData.append("loan_apply_date", data.loan_apply_date);
	bodyFormData.append("loan_duration", data.loan_duration);
	bodyFormData.append("loan_issue_date", data.loan_issue_date);
	bodyFormData.append("loan_type", data.loan_type);
	bodyFormData.append("rate_of_interest", data.rate_of_interest);

	return axios({
		method: "post",
		url: "http://localhost:4000/validateLoanApplicationData",
		data: bodyFormData,
		headers: { "Content-Type": "multipart/form-data" },
	});
};

function* handleLoanApplicationDataValidationStartEvents(action) {
	try {
		yield put(loanApplicationDataValidationStart(action.payload.userId));
		yield delay(2000);
		const response = yield call(callApi, action.payload);
		if (response.data.isValidated) {
			yield put(loanApplicationDataValidationSuccess(response.data));
		} else yield put(loanApplicationDataValidationFailed(response.data.message));
	} catch (err) {
		yield put(loanApplicationDataValidationFailed("Data Validation Failed!"));
	}
}

export function* watchForLoanApplicationDataValidationStartEvents() {
	yield takeLatest(
		"VALIDATE_LOAN_APPLICATION_DATA",
		handleLoanApplicationDataValidationStartEvents
	);
}
