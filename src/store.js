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

const enhancer = compose(
	applyMiddleware(...middleware),
	// window.devToolsExtension ? window.devToolsExtension() : f => f
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
	rootReducer,
	initialState,
	enhancer
)

export default store
