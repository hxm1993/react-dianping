import * as types from '../../types.js'

export function update(data) {
	console.log(1111,data)
	return {
		type: types.STORE_UPDATE,
		data
	}
}

export function add(item) {
	console.log(222,item)
	return {
		type: types.STORE_ADD,
		data: item
	}
}

export function remove(item) {
	console.log(item)
	return {
		type: types.STORE_RM,
		data: item
	}
}