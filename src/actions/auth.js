import axios from 'axios'
import Cookies from 'js-cookie'
import { ADD_BEARER_TOKEN } from './actionTypes'
import { get } from 'lodash'

export const addBearerToken = ({ bearerToken }) => ({
  type: ADD_BEARER_TOKEN,
  payload: bearerToken
})

export const refreshBearerToken = () => async (dispatch) => {
  const refreshToken = Cookies.get('refresh_token')
  const refreshUrl = '/api/auth'
  try {
    const result = await axios({
      method: 'POST',
      url: refreshUrl,
      data: { refreshToken }
    })
    return dispatch(addBearerToken({ bearerToken: result.data }))
  } catch (err) {
    console.error('could not refresh token', err)
  }
}

export const getBearerToken = ({ code }) => async (dispatch) => {
  // after redirect, code is available in query params
  const fetchUrl = '/api/auth'
  try {
    const result = await axios({
      method: 'POST',
      url: fetchUrl,
      data: code
    })

    const bearerToken = get(result, 'data')
    Cookies.set('expires_at', Date.now() + bearerToken.expires_in)    
    Cookies.set('bearer_token', bearerToken.access_token)
    Cookies.set('refresh_token', bearerToken.refresh_token) // refresh tokens never expire
    
    if (bearerToken.error) {
      return null
    }
    return dispatch(addBearerToken({ bearerToken }))
  } catch (err) {
    console.error('Something went wrong during access token retrieval: ', err)
  }
}
