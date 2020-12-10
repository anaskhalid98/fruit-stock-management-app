const INITIAL_STATE = {
	user: {},
	authenticated: false,
};

export const authenticationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return { user: action.payload, authenticated: true };
		case "LOGOUT":
			return { user: {}, authenticated: false };
		default:
			return state;
	}
};
