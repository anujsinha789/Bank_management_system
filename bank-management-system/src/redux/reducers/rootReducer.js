/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import authReducer from "./authentication";

const rootReducer = combineReducers({
  authentication: authReducer,
});

export default rootReducer; // returns an enhanced reducer
