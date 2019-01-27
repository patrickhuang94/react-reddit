import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// import App from './web/components/App'
import Header from './web/components/header'
import Sidebar from './web/components/sidebar'
import Home from './web/components/home'
import OAuthRedirect from './web/components/oauthRedirect'
import Settings from './web/components/settings'
import store, { history } from './web/store'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

require('dotenv').config()

const styles = {
	mainContainer: {
		display: 'flex',
		height: '100%',
		overflow: 'hidden'
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	}
}

const app = (
	<Provider store={store}>
		<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
			<div style={styles.mainContainer}>
				<Sidebar />
				<div style={styles.content}>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/oauth" component={OAuthRedirect} />
					<Route exact path="/settings" component={Settings} />
				</div>
			</div>
		</Router>
	</Provider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

registerServiceWorker()
