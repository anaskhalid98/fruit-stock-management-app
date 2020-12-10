const INITIAL_STATE = {
	message: "",
	open: false,
	severity: "success",
};

export const alertReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SHOW_SUCCESS":
			return { message: action.payload, severity: "success", open: true };
		case "SHOW_ERROR":
			return { message: action.payload, severity: "error", open: true };
		case "CLOSE":
			return { ...state, open: false };
		default:
			return state;
	}
};
