import { combineReducers } from 'redux'

import posts from './posts'
import ui from './ui'
import authentication from './authentication'
import user from './user'

export default combineReducers({
	posts,
	ui,
	authentication,
	user,
})
