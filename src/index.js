import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
import Home from './components/home'
import OAuthRedirect from './components/oauthRedirect'
import store, { history } from './store'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const app = (
	<Provider store={store}>
		<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
			<div>
				<Route path="/" component={App} />
				<Route path="/home" component={Home} />
				<Route path="/oauth" component={OAuthRedirect} />
			</div>
		</Router>
	</Provider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

registerServiceWorker()