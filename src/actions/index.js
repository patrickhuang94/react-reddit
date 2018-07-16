import axios from 'axios'
import {path} from 'ramda'

import store from '../store'
import {formatResponse} from '../utils'
import {
  ADD_POSTS,
  ADD_USER,
  ADD_BEARER_TOKEN,
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
      return dispatch(addPosts(formattedData))
    })
    .catch(err => console.error(err))
  }
}

export function getBearerToken ({code}) {

  return dispatch => {

    // after redirect, code is available in query params
    const fetchUrl = '/api/auth'
    return axios({
      method: 'POST',
      url: fetchUrl,
      data: code
    })
    .then(res => {
      const bearerToken = path(['data'])(res)
      return dispatch(addBearerToken({bearerToken}))
    })
    .catch(err => console.error('Something went wrong during access token retrieval: ', err))
  }
}

export function fetchMe () {

  return dispatch => {

    const state = store.getState()

    const fetchUrl = '/api/me'
    return axios.get(fetchUrl, {
      params: {
        token: state.authentication.access_token
      }
    })
    .then(res => {
      const userData = path(['data'])(res)
      return dispatch(addUserData({data: userData}))
    })
    .catch(err => console.error(err))
  }
}

// TODO: Put into separate file?
export function addPosts ({posts}) {

  return {
    type: ADD_POSTS,
    payload: posts
  }
}

export function addBearerToken ({bearerToken}) {

  return {
    type: ADD_BEARER_TOKEN,
    payload: bearerToken
  }
}

export function addUserData ({data}) {

  return {
    type: ADD_USER,
    payload: data
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
