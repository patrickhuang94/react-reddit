const axios = require('axios')
const querystring = require('querystring')

require('dotenv').config()

async function getAuthToken ({ refreshToken, code }) {
  let data
  if (refreshToken) {
    data = {
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }
  } else if (code) {
    data = {
      code,
      grant_type: 'authorization_code',
      // redirect_uri: 'https://patrickhuang94.github.io/react-reddit/oauth'
      redirect_uri: `${process.env.HOST_URL}/oauth`
    }
  }

  // x-www-form-urlencoded uses 'auth' in request
  const url = 'https://www.reddit.com/api/v1/access_token'
  const request = {
    method: 'POST',
    url,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: querystring.stringify(data),
    auth: {
      username: process.env.REACT_APP_REDDIT_CLIENT_ID,
      password: process.env.REACT_APP_REDDIT_CLIENT_SECRET
    }
  }
  
  try {
    const response = await axios(request)
    return response.data
  } catch (err) {
    throw new Error(`Could not authenticate: ${err.message}`)
  }
}

module.exports = {
  getAuthToken
}