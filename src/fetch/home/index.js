import {get} from "../get"

export function getAdMsg() {
	const result = get('/api/homead');
	return result;
}

export function getList(city, page) {
	const result = get('/api/homelist/'+city+"/"+page)
	return result;
}