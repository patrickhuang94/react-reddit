import axios from 'axios'
import { get } from 'lodash'

export const fetchSettings = () => async (dispatch, getState) => {
  const state = getState()
  const token = state.authentication.access_token
  try {
    const results = await axios.get('/api/user/settings', {
      params: { token }
    })
    const settingsData = get(results, 'data')
    // dispatch
  } catch (err) {
    console.error('error fetching user settings')
  }
}