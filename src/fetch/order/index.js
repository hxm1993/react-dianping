import {get} from "../get"
import {post} from "../post"

export function getOrder(username) {
	const result = get('/api/orderList');
	return result;
}

export function postComment(id,comment) {
	const result = get('/api/submitComment')
    return result
}
