const express = require('express')
const request = require('request')

const router = express.Router()

// const REDDIT_CLIENT_ID = 'LeltpchMUToy9w' // TODO: Put in .env
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

  const url = 'https://www.reddit.com/api/v1/access_token'
  const tokenData = await request.post({
    url,
    form: params
  })

  if (res.statusCode !== 200) {
    // TODO: Handle error here
    console.log('error...', res.body)
  }

  return res.status(200).send(code)
})

module.exports = router
