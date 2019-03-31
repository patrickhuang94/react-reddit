import { isUndefined, get } from 'lodash'
import Cookies from 'js-cookie'

const insert = (str, index, value) => str.substr(0, index) + value + str.substr(index)
const replace = (str, index, value) => str.substr(0, index) + value

export const digitsRounder = (digits) => {
	if (isUndefined(digits)) {
		return
	}

	const digitString = digits.toString()
	if (digitString.length > 3) {
		const decimal = insert(digitString, digitString.length - 3, '.')
		return replace(decimal, digitString.length - 1, 'k')
	}

	return digitString
}

export const formatPosts = (posts) => {
	const response = get(posts, 'data.data.children')
	if (response) {
		return response.reduce(
			(acc, post) => {
				const filteredPost = get(post, 'data')
				acc.posts = [...acc.posts, filteredPost]
				return acc
			},
			{ posts: [] }
		)
	}
}

// remove more fields from response object
export const formatMySubreddits = (subreddits) => {
	const response = subreddits
	if (response) {
		return response.reduce(
			(acc, subreddit) => {
				const filteredSubreddits = get(subreddit, 'data')
				acc.data = [...acc.data, filteredSubreddits]
				return acc
			},
			{ data: [] }
		)
	}
}

export const openRedditOAuth = () => {
	// const REDIRECT_URI = 'https://patrickhuang94.github.io/react-reddit/oauth'
	const REDIRECT_URI = `http://df426cce.ngrok.io/oauth` // TODO: Use env variable
	const url = `https://www.reddit.com/api/v1/authorize?client_id=${
		process.env.REACT_APP_REDDIT_CLIENT_ID
	}&response_type=code&state=random_string_here&redirect_uri=${REDIRECT_URI}&duration=permanent&scope=identity,vote,history,mysubreddits`

	// open reddit oauth page
	window.location.assign(url)
}

export const logout = () => {
	Cookies.remove('bearer_token')
	Cookies.remove('refresh_token')
	Cookies.remove('expires_at')

	window.location.reload()
}
