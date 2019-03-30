import { ADD_USER, ADD_USER_SUBREDDITS } from '../actions/actionTypes'

function user(state = {}, action) {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				...action.payload,
			}

		case ADD_USER_SUBREDDITS: {
			return {
				...state,
				subreddits: action.payload,
			}
		}

		default:
			return state
	}
}

export default user
