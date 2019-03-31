import axios from 'axios'

const fetchMySubredditsService = async ({ fullNameId, direction, token }) => {
	const request = {
		method: 'GET',
		url: '/api/user/subreddits',
		params: { token },
	}

	const mySubreddits = await axios(request)
	return mySubreddits.data
}

export { fetchMySubredditsService }
