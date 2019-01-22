const axios = require('axios')
// const querystring = require('querystring')

async function getUser ({ token }) {
  const url = 'https://oauth.reddit.com/api/v1/me'
  const request = {
    method: 'GET',
    url,
    headers: { 
      'User-Agent': 'client',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await axios(request)
    return response.data
  } catch (err) {
    throw new Error(`Could not get user information: ${err.message}`)
  }
}

// DON'T WORK
async function getUserSubreddits ({ token }) {
  const url = 'https://oauth.reddit.com/subreddits/mine/subscriber'
  const request = {
    method: 'GET',
    url,
    headers: {
      'User-Agent': 'client',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await axios(request)
    return response.data
  } catch (err) {
    throw new Error(`Could not get user subreddit information: ${err.message}`)
  }
}

// DON'T WORK
async function getUpvoted ({ token, username }) {
  const url = `https://oauth.reddit.com/user/${username}/upvoted`
  const request = {
    method: 'GET',
    url,
    headers: {
      'User-Agent': 'client',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await axios(request)
    return response.data
  } catch (err) {
    throw new Error(`Could not get user's upvoted posts: ${err.message}`)
  }
}

module.exports = {
  getUser,
  getUserSubreddits,
  getUpvoted
}