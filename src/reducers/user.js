import {
  SIGN_IN
} from '../actions/actionTypes'

function user (state = {}, action) {

  switch (action.type) {

    case SIGN_IN:
      return {
        ...state,
        user: 'Koala'
      }

    default:
      return state
  }
}

export default user
