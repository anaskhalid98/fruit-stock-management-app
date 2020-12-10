import { combineReducers } from "redux";
import { alertReducer } from "./reducers/alerts.reducer";
import { authenticationReducer } from "./reducers/authentication.reducer";
export default combineReducers({
	alert: alertReducer,
	authentication: authenticationReducer,
});
