import { STORE_SUBREDDITS } from './actionTypes'

export const storeMySubreddits = (subreddits) => ({
	type: STORE_SUBREDDITS,
	payload: subreddits,
})
