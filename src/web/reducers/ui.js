import { LOADING_START, LOADING_DONE, CURRENT_SUBREDDIT, CURRENT_SETTINGS_OPTION } from '../actions/actionTypes'

const initialState = {
	isLoading: true,
	currentSubreddit: 'all',
	currentSettingsOption: 'login',
}

function ui(state = initialState, action) {
	switch (action.type) {
		case LOADING_START:
			return {
				...state,
				isLoading: true,
			}

		case LOADING_DONE:
			return {
				...state,
				isLoading: false,
			}

		case CURRENT_SUBREDDIT:
			return {
				...state,
				currentSubreddit: action.payload,
			}

		case CURRENT_SETTINGS_OPTION:
			return {
				...state,
				currentSettingsOption: action.payload,
			}

		default:
			return state
	}
}

export default ui
