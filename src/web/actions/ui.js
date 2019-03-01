import { 
  LOADING_START, 
  LOADING_DONE, 
  CURRENT_SUBREDDIT
} from './actionTypes'

export const loadingStart = () => ({
  type: LOADING_START
})

export const loadingDone = () => ({
  type: LOADING_DONE
})

export const updateCurrentSubreddit = ({ subreddit }) => ({
  type: CURRENT_SUBREDDIT,
  payload: subreddit
})
