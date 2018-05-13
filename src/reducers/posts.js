import {
  ADD_POSTS
} from '../actions/actionTypes'

function posts (state = {}, action) {

  switch (action.type) {

    case ADD_POSTS:
      return action.payload

    default:
      return state
  }
}

export default posts
