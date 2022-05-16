export const setDrawerOpen = (data) => ({
	type: "SET_DRAWER_OPEN",
	payload: data,
});

export const setDrawerClose = (data) => ({
	type: "SET_DRAWER_CLOSE",
	payload: data,
});

export const closeAllDrawers = (data) => ({
	type: "CLOSE_ALL_DRAWERS",
	payload: data,
});
