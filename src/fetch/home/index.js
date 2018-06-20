import {get} from "../get"

export function getAdMsg() {
	const result = get('/api/homead');
	return result;
}