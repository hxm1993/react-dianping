import {get} from "../get";

export function getDetail(id) {
	const result = get("api/detail/"+id);
	return result;
}