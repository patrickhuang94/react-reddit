import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import colors from './web/colors'
import Header from './web/components/header'
import Home from './web/components/home'
import OAuthRedirect from './web/components/oauthRedirect'
import Settings from './web/components/settings'
import store, { history } from './web/store'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

require('dotenv').config()

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		backgroundColor: colors.lightestGray,
	},
}

const app = (
	<Provider store={store}>
		<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
			<div style={styles.container}>
				<Header />
				<Route exact path="/" component={Home} />
				<Route exact path="/oauth" component={OAuthRedirect} />
				<Route exact path="/settings" component={Settings} />
			</div>
		</Router>
	</Provider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

registerServiceWorker()
