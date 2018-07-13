const express = require('express')
const request = require('request')

const router = express.Router()
// const REDIRECT_URI = 'https://patrickhuang94.github.io/react-reddit/'
// const REDIRECT_URI = 'http://localhost:3000'
// const REDDIT_AUTHORIZE_URL = `https://www.reddit.com/api/v1/authorize?client_id=${REDDIT_CLIENT_ID}&response_type="code"&state="random_string_here"&redirect_uri=${REDIRECT_URI}&redirect_uri=permanent&scope="identity"`

router.post('/api/auth', async function (req, res, next) {

  const code = req.body.code
  const params = {
    code,
    grant_type: 'authorization_code',
    // redirect_uri: 'https://patrickhuang94.github.io/react-reddit/oauth'
    redirct_uri: 'http://e54fa876.ngrok.io/oauth'
  }

  const uri = 'https://www.reddit.com/api/v1/access_token'

  // reddit expects x-www-form-urlencoded which is defaulted with 'auth', not 'headers'
  const tokenData = await request.post({
    uri,
    form: data,
    auth: {
      user: process.env.REACT_APP_REDDIT_CLIENT_ID,
      password: process.env.REACT_APP_REDDIT_CLIENT_SECRET
    }
  }, (err, response) => {
    if (err) {
      console.log('ERROR: ', err)
    }

    if (response.statusCode !== 200) {
      console.log('status code: ', response.statusCode)
    }

    const responseData = JSON.parse(response.body)
    return res.status(200).send(responseData)
  })

  if (res.statusCode !== 200) {
    // TODO: Handle error here
    console.log('error...', res.body)
  }

  return res.status(200).send(code)
})

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
    }

    if (response.statusCode !== 200) {
      console.log('status code: ', response.statusCode)
    }

    console.log('server response', JSON.parse(response.body))
    const responseData = JSON.parse(response.body)
    return res.status(200).send(responseData)
  })
})

module.exports = router
