import {
  SHOW_MODAL,
  HIDE_MODAL,
  START_LOADING,
  STOP_LOADING,
  CURRENT_SUBREDDIT
} from '../actions/actionTypes'

const initialState = {
  loading: null,
  modalType: null,
  currentSubreddit: 'popular'
}

function ui (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.payload
      }

    case HIDE_MODAL:
      return initialState

    case START_LOADING: 
      return {
        ...state,
        loading: true
      }

    case STOP_LOADING:
      return {
        ...state,
        loading: false
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
