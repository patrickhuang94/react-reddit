import {ADD_POSTS} from './actionTypes'

import {get} from 'lodash'

export function fetchPosts ({sub, limit}) {

  return (dispatch) => {

    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      cors: true,
      credentials: 'same-origin'
    }

    const fetchUrl = `https://www.reddit.com/r/${sub}.json?limit=${limit}`
    fetch(fetchUrl, options)
    .then(res => {
      res.json().then(data => {
        const formattedData = get(data, ['data', 'children'])
        return dispatch(addPosts(formattedData))
      })
    })
    .catch(err => console.error(err))
  }
}

export function addPosts (posts) {

  return {
    type: ADD_POSTS,
    payload: posts
  }
}
