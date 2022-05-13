/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import authReducer from "./authentication";
import drawerState from "./drawerState";
import registerUserReducer from "./registerUserReducer";

const persistConfig = {
	key: "root",
	storage: storageSession,
	whitelist: ["authentication", "registerUser"],
};

const rootReducer = combineReducers({
	authentication: authReducer,
	registerUser: registerUserReducer,
	drawerState,
});

export default persistReducer(persistConfig, rootReducer); // returns an enhanced reducer
