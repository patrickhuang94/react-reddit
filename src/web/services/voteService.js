import axios from 'axios'

const vote = async ({ fullNameId, direction, token }) => {
	const request = {
		method: 'POST',
		url: '/api/vote',
		data: {
			fullNameId,
			direction,
		},
		params: { token },
	}

	return await axios(request)
}

export { vote }
