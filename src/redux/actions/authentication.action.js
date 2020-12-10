import {ACCESS_TOKEN} from "../../constants";
import jwt_decode from "jwt-decode";
import {login} from "../../service/authentication.service";



export const localAuthenticationAction = ({state, history}) => async (
	dispatch
) => {
	let fruitmark_auth = undefined;
	return login(state)
		.then((response) => {
			console.log("ejakeaneiatgyuhiojk");
			fruitmark_auth = response.data.accessToken;
			console.log(response.data);
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
