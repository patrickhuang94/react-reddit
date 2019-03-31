import axios from 'axios'
import { get, isEmpty } from 'lodash'
import { ADD_USER } from './actionTypes'
import { getTokenFromCookies } from './auth'

export const fetchMe = () => async (dispatch, getState) => {
	const state = getState()
	let token = get(state, 'authentication.access_token')
	if (isEmpty(state.authentication)) {
		token = await dispatch(getTokenFromCookies())
	}

	try {
		const results = await axios.get('/api/user', {
			params: { token },
		})
		const userData = get(results, 'data')
		return dispatch(addUserData({ data: userData }))
	} catch (err) {
		console.error('error fetching user data')
	}
}

export const fetchUpvoted = async ({ username, token }) => {
	const request = {
		method: 'GET',
		url: '/api/user/upvoted',
		params: { username, token },
	}

	const upvotedPosts = await axios(request)
	return upvotedPosts.data
}

export const addUserData = ({ data }) => ({
	type: ADD_USER,
	payload: data,
})
