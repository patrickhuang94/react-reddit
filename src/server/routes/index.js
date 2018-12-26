const express = require('express')
const router = express.Router()
const request = require('request')
const auth = require('../services/authService')

router.post('/api/auth', async function (req, res) {
  try {
    const response = await auth.getAuthToken({
      refreshToken: req.body.refreshToken,
      code: req.body.code
    })
    console.log('route response', response)
    return res.status(200).send(response)
  } catch (err) {
    return res.status(500).send({
      message: err.message,
      error: {
        status: 500
      }
    })
  }
})

// all the methods below are authorized requests
router.get('/api/me', async function (req, res) {
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
      console.log('/me failed: ', response)
      return
    }

    const responseData = JSON.parse(response.body)
    return res.status(200).send(responseData)
  })
})

router.get('api/me/subreddits', async function (req, res) {
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
      console.log('/subreddits failed: ', response)
      return
    }
    console.log({response})
    const responseData = JSON.parse(response.body)
    return res.status(200).send(responseData)
  })
})

module.exports = router
