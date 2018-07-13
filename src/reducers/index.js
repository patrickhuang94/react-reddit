import {combineReducers} from 'redux'
// import {routerReducer} from 'react-router-redux'

import posts from './posts'
import ui from './ui'
import authentication from './authentication'
import user from './user'

export default combineReducers({
  // routing: routerReducer,
  posts,
  ui,
  authentication,
  user
})
