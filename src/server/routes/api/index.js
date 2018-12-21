const express = require('express')
const request = require('request')

const router = express.Router()

router.post('/api/auth', async function (req, res, next) {
  let formData = {}
  if (req.body.refreshToken) {
    formData = {
      refresh_token: req.body.refreshToken,
      grant_type: 'refresh_token',
    }
  } else {
    const code = req.body.code
    formData = {
      code,
      grant_type: 'authorization_code',
      // redirect_uri: 'https://patrickhuang94.github.io/react-reddit/oauth'
      redirect_uri: `${process.env.HOST_URL}/oauth`,
    }
  }

  const uri = 'https://www.reddit.com/api/v1/access_token'
  // reddit expects x-www-form-urlencoded which is defaulted with 'auth', not 'headers'
  const tokenData = await request.post({
    uri,
    form: formData,
    auth: {
      user: process.env.REACT_APP_REDDIT_CLIENT_ID,
      password: process.env.REACT_APP_REDDIT_CLIENT_SECRET
    }
  }, (err, response) => {
    if (err) {
      console.log('ERROR: ', err)
      return
    }

    if (res.statusCode !== 200) {
      // TODO: Handle error here
      console.log('status code error', res.body)
      return
    }

    return res.status(200).send(response.body)
  })
})

// all the methods below are authorized requests
router.get('/api/me', async function (req, res, next) {
  const uri = 'https://oauth.reddit.com/api/v1/me'
  const token = req.query.token
  const auth = {'bearer': token}
  // gives back 403 without this headers set
  const headers = {'User-Agent': 'client'}
  const data = await request.get({
    uri,
    auth,
    headers
  }, (err, response) => {
    if (err) {
      console.log('ERROR: ', err)
      return
    }

    if (response.statusCode !== 200) {
      console.log('status code error', response)
      return
    }

    const responseData = JSON.parse(response.body)
    return res.status(200).send(responseData)
  })
})

router.get('api/me/subreddits', async function (req, res, next) {
  const uri = 'https://oauth.reddit.com/subreddits/mine/subscriber'
  const token = req.query.token
  const auth = {'bearer': token}
  // gives back 403 without this headers set
  const headers = {'User-Agent': 'client'}
  const subreddits = await request.get({
    uri,
    auth,
    headers
  }, (err, response) => {
    if (err) {
      console.log('ERROR: ', err)
      return
    }

    if (response.statusCode !== 200) {
      console.log('status code error', response)
      return
    }
    console.log({response})
    const responseData = JSON.parse(response.body)
    return res.status(200).send(responseData)
  })
})

module.exports = router
