import { STORE_SUBREDDITS } from '../actions/actionTypes'

const initialState = {
	data: [],
}

function subreddits(state = initialState, action) {
	switch (action.type) {
		case STORE_SUBREDDITS:
			return {
				...state,
				...action.payload,
			}

		default:
			return state
	}
}

export default subreddits
