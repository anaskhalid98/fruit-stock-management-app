import axios from "axios";
import {ACCESS_TOKEN} from "../constants";

export const request = (options) => {
	axios.defaults.headers.common["Content-Type"] =
		"application/json;charset=UTF-8";
	if (localStorage.getItem(ACCESS_TOKEN)) {
		axios.defaults.headers.common["x-access-token"] =
			 localStorage.getItem(ACCESS_TOKEN);
	} else {
		delete axios.defaults.headers.common["x-access-token"];
	}
	return axios
		.create({
			headers: {
				post: {
					"Content-Type": "application/json",
				},
			},
		})
		.request(options)
		.then(
			(response) => {
				return Promise.resolve(response);
			},
			(error) => {
				console.log("AXIOS : " + error);
				return Promise.reject(error.response?.data?.message);
			}
		);
};
