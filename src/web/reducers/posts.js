import {
  ADD_POSTS
} from '../actions/actionTypes'

const initialState = {
  data: {}
}

function posts (state = initialState, action) {

  switch (action.type) {

    case ADD_POSTS:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}

export default posts
