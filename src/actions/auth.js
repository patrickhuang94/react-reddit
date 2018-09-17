import axios from 'axios'
import {ADD_BEARER_TOKEN} from './actionTypes'
import {path} from 'ramda'

export const addBearerToken = ({bearerToken}) => ({
  type: ADD_BEARER_TOKEN,
  payload: bearerToken
})

export const getBearerToken = ({code}) => async (dispatch) => {
  // after redirect, code is available in query params
  const fetchUrl = '/api/auth'
  try {
    const result = await axios({
      method: 'POST',
      url: fetchUrl,
      data: code
    })

    const bearerToken = path(['data'])(result)
    return null ? bearerToken.error : dispatch(addBearerToken({bearerToken}))
  } catch (err) {
    console.error('Something went wrong during access token retrieval: ', err)
  }
}
