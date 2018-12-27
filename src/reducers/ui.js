import {
  SHOW_MODAL,
  HIDE_MODAL,
  START_LOADING,
  STOP_LOADING
} from '../actions/actionTypes'

const initialState = {
  loading: null,
  modalType: null
}

function ui (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType
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

    default:
      return state
  }
}

export default ui
