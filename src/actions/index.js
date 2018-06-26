import axios from 'axios'
import {get} from 'lodash'

import {formatResponse} from '../utils'
import {
  ADD_POSTS,
  SHOW_MODAL,
  HIDE_MODAL
} from './actionTypes'

export function fetchPosts ({sub, limit}) {

  return dispatch => {

    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      cors: true,
      credentials: 'same-origin'
    }

    const fetchUrl = `https://www.reddit.com/r/${sub}.json`

    return axios.get(fetchUrl)
    .then(res => {
      const formattedData = formatResponse(res)

      console.log('response from fetchPosts action: ', formattedData)
      return dispatch(addPosts(formattedData))
    })
    .catch(err => console.error(err))
  }
}

export function addPosts ({posts}) {

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
