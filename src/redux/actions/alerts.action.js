export const fireSuccess = (message) => (dispatch) => {
	dispatch({
		type: "SHOW_SUCCESS",
		payload: message,
	});
};

export const fireError = (message) => (dispatch) => {
	dispatch({
		type: "SHOW_ERROR",
		payload: message || "Oops! Something went wrong. Please try again!",
	});
};

export const fireClose = () => (dispatch) => {
	dispatch({
		type: "CLOSE",
	});
};
