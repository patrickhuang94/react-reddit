import axios from 'axios'
import Cookies from 'js-cookie'
import { ADD_BEARER_TOKEN } from './actionTypes'
import { get } from 'lodash'

export const addBearerToken = ({ bearerToken }) => ({
  type: ADD_BEARER_TOKEN,
  payload: bearerToken
})

export const getTokenFromCookies = () => async (dispatch) => {
  if (Date.now() > Cookies.get('expires_at')) {
    await dispatch(refreshBearerToken())
  } else {
    await dispatch(addBearerToken({
      bearerToken: { access_token: Cookies.get('bearer_token')}
    }))
  }

  return Cookies.get('bearer_token')
}

export const refreshBearerToken = () => async (dispatch) => {
  const refreshToken = Cookies.get('refresh_token')
  const refreshUrl = '/api/auth'
  try {
    const result = await axios({
      method: 'POST',
      url: refreshUrl,
      data: { refreshToken }
    })

    const bearerToken = get(result, 'data')
    const expiresInMs = bearerToken.expires_in * 1000
    Cookies.set('expires_at', Date.now() + expiresInMs)    
    Cookies.set('bearer_token', bearerToken.access_token)

    return dispatch(addBearerToken({ bearerToken }))
  } catch (err) {
    console.error('could not refresh token', err)
  }
}

export const getBearerToken = ({ code }) => async (dispatch) => {
  // after redirect, code is available in query params
  try {
    const result = await axios({
      method: 'POST',
      url: '/api/auth',
      data: code
    })

    const bearerToken = get(result, 'data')
    const expiresInMs = bearerToken.expires_in * 1000
    
    Cookies.set('expires_at', Date.now() + expiresInMs)    
    Cookies.set('bearer_token', bearerToken.access_token)
    Cookies.set('refresh_token', bearerToken.refresh_token)

    return dispatch(addBearerToken({ bearerToken }))
  } catch (err) {
    console.error('Something went wrong during access token retrieval: ', err)
  }
}
