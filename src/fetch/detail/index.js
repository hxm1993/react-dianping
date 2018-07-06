import {get} from "../get";

export function getDetail(id) {
	const result = get("api/detail/"+id);
	return result;
}

export function getComment(id) {
	const result = get("api/detail/comment/"+id);
	return result;
}