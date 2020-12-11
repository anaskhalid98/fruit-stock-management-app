import {ACCESS_TOKEN} from "../../constants";
import jwt_decode from "jwt-decode";
import {login, signUp} from "../../service/authentication.service";



export const localAuthenticationAction = ({signinData, history}) => async (
	dispatch
) => {
	let fruitmark_auth = undefined;
	return login(signinData)
		.then((response) => {
			fruitmark_auth = response.data.accessToken;
			localStorage.setItem(ACCESS_TOKEN, fruitmark_auth);
			const decode = jwt_decode(fruitmark_auth);
			dispatch({
				type: "SET_CURRENT_USER",
				payload: decode,
			});
			history.push("/Home");
			return Promise.resolve(response);
		})
		.catch((error) => {
			localStorage.removeItem(ACCESS_TOKEN);
			dispatch({
				type: "LOGOUT",
			});
			return Promise.reject(error);
		});
};

export const signUpAction = ({signupData, history}) => async (
	dispatch
) => {
	return signUp(signupData)
		.then((response) => {
			dispatch({
				type: "SHOW_SIGNUP_SUCCESS",
			});
			history.push("/SignIn");
			return Promise.resolve(response);
		})
		.catch((error) => {
			dispatch({
				type: "SHOW_SIGNUP_FAILED",
			});
			return Promise.reject(error);
		});
};



export const authenticateUser = (token) => (dispatch) => {
	if (token) {
		try {
			const decode = jwt_decode(token);
			dispatch({
				type: "SET_CURRENT_USER",
				payload: decode,
			});
		} catch (error) {
			localStorage.removeItem(ACCESS_TOKEN);
			dispatch({
				type: "LOGOUT",
			});
		}
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem(ACCESS_TOKEN);
	dispatch({
		type: "LOGOUT",
	});
};
