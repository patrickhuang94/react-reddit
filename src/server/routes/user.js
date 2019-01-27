const express = require('express')
const router = express.Router()
const userService = require('../services/userService')

router.get('/', async function (req, res) {
  try {
    const response = await userService.getUser({
      token: req.query.token
    })
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

router.get('/settings', async function(req, res) {
  try {
    const response = await userService.getUserSettings({
      token: req.query.token
    })
    return res.status(200).send(response)
  } catch (err) {

  }
})

// DON'T WORK
router.get('/subreddits', async function (req, res) {
  try {
    const response = await userService.getUserSubreddits({
      token: req.query.token
    })
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

router.get('/upvoted', async function (req, res) {
  try {
    const response = await userService.getUpvoted({
      token: req.query.token,
      username: req.query.username
    })
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

module.exports = router