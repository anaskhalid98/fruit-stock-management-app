import {request} from "../config/axios-config";
import {API_BASE_URL} from "../constants";


export function login(loginRequest) {
	return request({
		url: API_BASE_URL + "/api/auth/signin",
		method: "POST",
		data: JSON.stringify(loginRequest),
	});
}
export function signUp(signUpRequest) {
	return request({
		url: API_BASE_URL + "/api/auth/signup",
		method: "POST",
		data: JSON.stringify(signUpRequest)
	});
}
