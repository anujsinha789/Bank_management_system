import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  loginUserStarted,
  loginUserSuccess,
  loginUserFailed,
  logoutUser,
} from "../../redux/actions/authentication";
import axios from "axios";

const callApi = (data) => {
  var bodyFormData = new FormData();
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
    const response = yield call(callApi, action.payload);
    if (response.data?.isAuthenticated) {
      yield put(loginUserSuccess(response?.data));
    } else yield put(loginUserFailed());
  } catch (err) {
    yield put(loginUserFailed());
    console.log("User Authentication Failed!", err);
  }
}

export function* watchForAuthenticateUserStartEvents() {
  yield takeLatest("AUTHENTICATE_USER", handleAuthenticateUserStartEvents);
}
