import {
  ADD_ACCESS_TOKEN
} from '../actions/actionTypes'

function authentication (state = {}, action) {

  switch (action.type) {

    case ADD_ACCESS_TOKEN:
      return {
        accessToken: action.payload
      }

    default:
      return state
  }
}

export default authentication
