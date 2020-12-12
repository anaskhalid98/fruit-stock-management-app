import {request} from "../config/axios-config";
import {API_BASE_URL} from "../constants";

export function TransferMerchandiseService(requestData) {
	const  data = {
		departure:requestData.departure,
		arrival:requestData.arrival,
		quantity: parseInt(requestData.number),
		merchandise:requestData.merchandise,
	}
	return request({
		url: API_BASE_URL + "/api/TransferMerchandise",
		method: "POST",
		data: JSON.stringify(data)
	});
}
