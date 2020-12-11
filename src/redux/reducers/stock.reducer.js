const INITIAL_STATE = {
	stock:[]
};

export const setStockReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_STOCK":
			return { stock: action.payload};
		default:
			return state;
	}
};
