import { ADD_POSTS, UPDATE_POST } from '../actions/actionTypes'

const initialState = {
	data: [],
}

function posts(state = initialState, action) {
	switch (action.type) {
		case ADD_POSTS:
			return {
				...state,
				data: action.payload,
			}

		case UPDATE_POST:
			const posts = state.data.map((post) => {
				if (post.name === action.payload.name) {
					return action.payload
				}
				return post
			})

			return {
				...state,
				data: posts,
			}

		default:
			return state
	}
}

export default posts
