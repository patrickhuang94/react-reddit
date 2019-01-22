import axios from 'axios'

export const votePost = ({ fullNameId, direction }) => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.authentication.access_token
    // TODO: should probably in a web/service file
    // same for other action files
    const request = {
      method: 'POST',
      url: '/api/vote',
      data: {
        fullNameId,
        direction
      },
      params: {
        token
      }
    }

    return await axios(request)
  } catch (err) {
    throw err
  }
}