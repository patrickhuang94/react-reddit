import {
  LOADING_START,
  LOADING_DONE,
  CURRENT_SUBREDDIT
} from '../actions/actionTypes'

const initialState = {
  isLoading: true,
  currentSubreddit: 'all',
}

function ui (state = initialState, action) {
  switch (action.type) {
    case LOADING_START: 
      return {
        ...state,
        isLoading: true,
      }

    case LOADING_DONE:
      return {
        ...state,
        isLoading: false,
      }

    case CURRENT_SUBREDDIT:
      return {
        ...state,
        currentSubreddit: action.payload
      }

    default:
      return state
  }
}

export default ui
