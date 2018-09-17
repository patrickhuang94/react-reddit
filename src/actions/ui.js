import {SHOW_MODAL, HIDE_MODAL} from './actionTypes'

export const showModal = (type) => ({
  type: SHOW_MODAL,
  modalType: type
})

export const hideModal = () => ({
  type: HIDE_MODAL
})
