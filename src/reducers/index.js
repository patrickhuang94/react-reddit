import {combineReducers} from 'redux'
// import {routerReducer} from 'react-router-redux'

import posts from './posts'
import ui from './ui'
import authentication from './authentication'

export default combineReducers({
  // routing: routerReducer,
  posts,
  ui,
  authentication
})
