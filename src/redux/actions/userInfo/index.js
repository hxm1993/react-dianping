import * as types from '../../types.js'

export function update(data) {
    return {
        type: types.USERINFO_UPDATE,
        data
    }
}