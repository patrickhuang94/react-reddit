import axios from 'axios'
// import { get } from 'lodash'
import { loadingStart, loadingDone } from './ui'
import { storeMySubreddits } from './subreddits'
import { ADD_POSTS, UPDATE_POST } from './actionTypes'
import { formatPosts, formatMySubreddits } from '../utils'
import { fetchMySubredditsService } from '../services/postService'

export const fetchPosts = (subreddit) => async (dispatch) => {
	dispatch(loadingStart())
	const fetchUrl = `https://www.reddit.com/r/${subreddit}.json`
	try {
		const fetchedPosts = await axios.get(fetchUrl)
		const formattedPosts = formatPosts(fetchedPosts)
		dispatch(addPosts(formattedPosts))
		dispatch(loadingDone())
	} catch (err) {
		dispatch(loadingDone())
	}
}

export const fetchMySubreddits = () => async (dispatch, getState) => {
	const state = getState()
	const token = state.authentication.access_token
	const mySubreddits = await fetchMySubredditsService({ token })
	const formattedMySubreddits = formatMySubreddits(mySubreddits)
	console.log(formattedMySubreddits)
	dispatch(storeMySubreddits(formattedMySubreddits))
}

export const addPosts = ({ posts }) => ({
	type: ADD_POSTS,
	payload: posts,
})

export const updatePost = (post) => ({
	type: UPDATE_POST,
	payload: post,
})

// export const storeMySubreddits = (subreddits) => ({
// 	type: STORE_SUBREDDITS,
// 	payload: subreddits,
// })
