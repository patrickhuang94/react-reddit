const express = require('express')
const router = express.Router()

const axios = require('axios')

router.get('/api/fetch', (req, res) => {
  const fetchUrl = 'https://www.reddit.com/r/all.json'

  return axios({
    method: 'get',
    url: fetchUrl
  })
  .then(res => {
    const data = res.data.data.children[0].data
    console.log({data})
    return data
  })
})

module.exports = router
