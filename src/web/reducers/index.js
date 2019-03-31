import { combineReducers } from 'redux'

import posts from './posts'
import ui from './ui'
import authentication from './authentication'
import user from './user'
import mySubreddits from './mySubreddits'

export default combineReducers({
	posts,
	ui,
	authentication,
	user,
	mySubreddits,
})
