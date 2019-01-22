import axios from 'axios'
import { get } from 'lodash'
import { ADD_USER } from './actionTypes'

export const fetchMe = () => async (dispatch, getState) => {
  const state = getState()
  const token = state.authentication.access_token

  try {
    const results = await axios.get('/api/user', {
      params: { token }
    })
    const userData = get(results, 'data')
    return dispatch(addUserData({ data: userData }))
  } catch (err) {
    console.error('error fetching user data')
  }
}

export const fetchUpvoted = () => async (dispatch, getState) => {
  const state = getState()
  const token = state.authentication.access_token
  const username = 'pahtreeeck'
  try {
    const results = await axios.get('/api/user/upvoted', {
      params: {
        token,
        username
      }
    })
  } catch (err) {
    console.error('errorrorororororororororo')
  }
}

export const addUserData = ({data}) => ({
  type: ADD_USER,
  payload: data
})
