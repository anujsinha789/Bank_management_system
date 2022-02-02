import { all, fork } from "redux-saga/effects";
import * as AuthenticateUserSaga from "./AuthenticateUser";
import * as LoanApplicationSaga from "./loanApplicationSaga";
import * as UserRegistrationSaga from "./registerUserSaga";

export default function* rootSaga() {
	yield all(
		[
			...Object.values(AuthenticateUserSaga),
			...Object.values(LoanApplicationSaga),
			...Object.values(UserRegistrationSaga),
		].map(fork)
	);
}
