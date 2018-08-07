import {get} from "../get"

export function getOrder(username) {
	const result = get('/api/orderList');
	return result;
}
