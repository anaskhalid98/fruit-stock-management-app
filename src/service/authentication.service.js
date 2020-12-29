import {request} from "../config/axios-config";
import {API_BASE_URL} from "../constants";


/**
 * Login
 *
 * @param {Object} Object made of username and password.
 * @returns {Object} JWT token
 */
export function login(loginRequest) {
	return request({
		url: API_BASE_URL + "/api/auth/signin",
		method: "POST",
		data: JSON.stringify(loginRequest),
	});
}

/**
 * signUp
 * @param {Object} Object made of username, email and password.
 * @returns {Object} Success message
 */
export function signUp(signUpRequest) {
	return request({
		url: API_BASE_URL + "/api/auth/signup",
		method: "POST",
		data: JSON.stringify(signUpRequest)
	});
}

/**
 * signUp
 * @returns {Object} UserStock
 */
export function getUserStock() {
	return request({
		url: API_BASE_URL + "/api/Stock",
		method: "GET",
	});
}

