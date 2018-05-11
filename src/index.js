import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
import Home from './components/home'
import About from './components/about'
import store, { history } from './store'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const app = (
	<Provider store={store}>
		<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
			<div>
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	</Provider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

registerServiceWorker()
