import { 
  SHOW_MODAL, 
  HIDE_MODAL, 
  START_LOADING, 
  STOP_LOADING, 
  CURRENT_SUBREDDIT
} from './actionTypes'

export const showModal = (type) => ({
  type: SHOW_MODAL,
  payload: type
})

export const hideModal = () => ({
  type: HIDE_MODAL
})

export const startLoading = () => ({
  type: START_LOADING
})

export const stopLoading = () => ({
  type: STOP_LOADING
})

export const updateCurrentSubreddit = ({ subreddit }) => ({
  type: CURRENT_SUBREDDIT,
  payload: subreddit
})
