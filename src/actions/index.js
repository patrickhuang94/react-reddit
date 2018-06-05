import {
  ADD_POSTS,
  SHOW_MODAL,
  HIDE_MODAL
} from './actionTypes'

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

export function showModal (type) {

  return {
    type: SHOW_MODAL,
    modalType: type
  }
}

export function hideModal () {

  return {
    type: HIDE_MODAL
  }
}
