import {
  ADD_BEARER_TOKEN
} from '../actions/actionTypes'

function authentication (state = {}, action) {
  switch (action.type) {
    case ADD_BEARER_TOKEN:
      return action.payload

    default:
      return state
  }
}

export default authentication
