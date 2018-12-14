import axios from 'axios'
import { ADD_POSTS } from './actionTypes'
import { formatPosts } from '../utils'

export const fetchPosts = ({sub, limit}) => async (dispatch) => {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    cors: true,
    credentials: 'same-origin'
  }

  const fetchUrl = `https://www.reddit.com/r/${sub}.json`

  try {
    const fetchedPosts = await axios.get(fetchUrl)
    const formattedPosts = formatPosts(fetchedPosts)
    dispatch(addPosts(formattedPosts))
  } catch (err) {
    console.log('error while fetching posts: ', err)
  }
}

export const addPosts = ({posts}) => ({
  type: ADD_POSTS,
  payload: posts
})
