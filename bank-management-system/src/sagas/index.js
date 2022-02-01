import { all, fork } from "redux-saga/effects";
import * as AuthenticateUserSaga from "./AuthenticateUser";

export default function* rootSaga() {
  yield all([...Object.values(AuthenticateUserSaga)].map(fork));
}
