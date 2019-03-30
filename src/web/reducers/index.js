import { combineReducers } from 'redux'

import posts from './posts'
import ui from './ui'
import authentication from './authentication'
import user from './user'
import categories from './categories'

export default combineReducers({
	posts,
	ui,
	authentication,
	user,
	categories,
})
