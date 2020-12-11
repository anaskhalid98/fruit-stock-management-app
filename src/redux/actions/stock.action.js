export const setStockAction = (stock) => (dispatch) => {
	dispatch({
		type: "SET_STOCK",
		payload: stock,
	});
};
