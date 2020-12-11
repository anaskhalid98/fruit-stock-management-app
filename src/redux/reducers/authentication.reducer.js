const  AUTHENTICATION_INITIAL_STATE = {
	user: {},
	authenticated: false,
	message: ""
};
export const authenticationReducer = (state = AUTHENTICATION_INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {...state, user: action.payload, authenticated: true };
		case "LOGOUT":
			return {...state, user: {}, authenticated: false };
		case "SHOW_SIGNUP_SUCCESS":
			return {...state, message: "The user has been registered successfully!"};
		case "SHOW_SIGNUP_FAILED":
			return {  ...state, message: "The user failed signing up!" };
		default:
			return state;
	}
};


