import axios from "axios";

export const request = (options) => {
	axios.defaults.headers.common["Content-Type"] =
		"application/json;charset=UTF-8";
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
