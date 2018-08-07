import * as types from '../../types'

const initialState = [];

export default function store (state = initialState, action) {
    switch (action.type) {
        case types.STORE_UPDATE:
            return action.data
        case types.STORE_ADD:
            return state.push({id: action.data.id})
        case types.STORE_RM:
            console.log("state",state)
            return state.filter(item => {
            	return item.id !== action.data.id;
            })
        default:
            return state
    }
}