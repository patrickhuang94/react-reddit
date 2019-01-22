import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './web/components/App'
import Home from './web/components/home'
import OAuthRedirect from './web/components/oauthRedirect'
import store, { history } from './web/store'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

// .env configs
require('dotenv').config()

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
