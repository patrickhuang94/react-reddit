import axios from 'axios'
import { startLoading, stopLoading } from './ui'
import { ADD_POSTS } from './actionTypes'
import { formatPosts } from '../utils'

export const fetchPosts = ({ sub, limit }) => async (dispatch) => {
  dispatch(startLoading())
  const fetchUrl = `https://www.reddit.com/r/${sub}.json`
  try {
    const fetchedPosts = await axios.get(fetchUrl)
    const formattedPosts = formatPosts(fetchedPosts)
    dispatch(addPosts(formattedPosts))
    dispatch(stopLoading())
  } catch (err) {
    dispatch(stopLoading())
  }
}

export const addPosts = ({ posts }) => ({
  type: ADD_POSTS,
  payload: posts
})
