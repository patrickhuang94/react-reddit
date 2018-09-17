import axios from 'axios'
import {ADD_POSTS} from './actionTypes'
import {formatResponse} from '../utils'

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
    const response = await axios.get(fetchUrl)
    const formattedData = formatResponse(response)
    dispatch(addPosts(formattedData))
  } catch (err) {
    console.log('error while fetching posts: ', err)
  }
}

export const addPosts = ({posts}) => ({
  type: ADD_POSTS,
  payload: posts
})
