const express = require('express')
const router = express.Router()
const auth = require('../services/authService')

router.post('/', async function (req, res) {
  try {
    const response = await auth.getAuthToken({
      refreshToken: req.body.refreshToken,
      code: req.body.code
    })
    console.log('response', response)
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