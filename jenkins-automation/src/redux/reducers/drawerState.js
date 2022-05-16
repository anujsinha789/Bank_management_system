import { createReducer } from "../utils";

const initialState = {
	isDrawerOpen: false,
	screen: "",
};

export default createReducer(initialState, {
	["SET_DRAWER_OPEN"]: (state, payload) => ({
		...state,
		isDrawerOpen: true,
		screen: payload.screen,
	}),
	["SET_DRAWER_CLOSE"]: (state, payload) => ({
		...state,
		isDrawerOpen: false,
		screen: payload.screen,
	}),
	["RESET_DATA"]: (state) => ({
		...state,
	}),
});
