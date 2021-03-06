import axios from 'axios'
import { get } from 'lodash'

export const fetchMessages = () => async (dispatch, getState) => {
  const state = getState()
  const token = state.authentication.access_token
  try {
    const results = await axios.get('/api/user/messages', {
      params: { token }
    })
    // const messages = get(results, 'data')
    // dispatch
  } catch (err) {
    console.error('error fetching user messages: ', err)
  }
}