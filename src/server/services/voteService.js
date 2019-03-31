const axios = require('axios')
const querystring = require('query-string')

async function vote({ fullNameId, direction, token }) {
	const url = 'https://oauth.reddit.com/api/vote'
	const USER_AGENT = 'web:LeltpchMUToy9w:v0.0.1 (by /u/pahtreeeck)'

	const data = {
		id: fullNameId,
		dir: direction,
		rank: 2,
	}

	const request = {
		method: 'POST',
		url,
		headers: {
			'User-Agent': USER_AGENT,
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: querystring.stringify(data),
	}

	try {
		const response = await axios(request)
		return response.data
	} catch (err) {
		throw new Error(`Could not upvote a post: ${err.message}`)
	}
}

module.exports = {
	vote,
}
