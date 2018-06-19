import * as types from '../../types'

const initialState = {test:'aaa'}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case types.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}