const express = require('express')
const router = express.Router()
const voteService = require('../services/voteService')

router.post('/', async function (req, res) {
  try {
    const vote = await voteService.vote({
      fullNameId: req.body.fullNameId,
      direction: req.body.direction,
      token: req.query.token
    })
    return res.status(200).send(vote)
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