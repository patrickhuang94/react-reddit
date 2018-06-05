import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/actionTypes'

const initialState = {
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

    default:
      return state
  }
}

export default ui
