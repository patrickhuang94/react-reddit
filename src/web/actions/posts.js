import axios from 'axios'
import { loadingStart, loadingDone } from './ui'
import { ADD_POSTS } from './actionTypes'
import { formatPosts } from '../utils'

export const fetchPosts = ({ sub, limit }) => async (dispatch) => {
  dispatch(loadingStart())
  const fetchUrl = `https://www.reddit.com/r/${sub}.json`
  try {
    const fetchedPosts = await axios.get(fetchUrl)
    const formattedPosts = formatPosts(fetchedPosts)
    dispatch(addPosts(formattedPosts))
    dispatch(loadingDone())
  } catch (err) {
    dispatch(loadingDone())
  }
}

export const addPosts = ({ posts }) => ({
  type: ADD_POSTS,
  payload: posts
})
