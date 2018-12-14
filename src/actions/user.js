import axios from 'axios'
import {path} from 'ramda'
import {ADD_USER} from './actionTypes'

export const fetchMe = () => async (dispatch, getState) => {
  const state = getState()
  const token = state.authentication.access_token

  try {
    const results = await axios.get('/api/me', {
      params: { token }
    })

    const userData = path(['data'])(results)
    dispatch(addUserData({data: userData}))

    return axios.get('/api/me/subreddits', {
      params: { token }
    })
  } catch (err) {
    console.error('error fetching user data')
  }
}

export const addUserData = ({data}) => ({
  type: ADD_USER,
  payload: data
})
