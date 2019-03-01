import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index'

export const history = createHistory()

const initialState = {}
const middleware = [
	thunk,
	routerMiddleware(history)
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
	applyMiddleware(...middleware)
)

const store = createStore(
	rootReducer,
	initialState,
	enhancer
)

export default store
