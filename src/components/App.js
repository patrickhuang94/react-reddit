import React from 'react'

import Menu from './menu'
import Home from './home'
// import Footer from './footer'

import logo from '../logo.svg'
import '../App.css'

const styles = {
	mainContainer: {
		display: 'flex',
		// flexDirection:' column',
		// backgroundColor: 'yellow',
		height: '100vh'
	},
	headingContainer: {
		marginTop: '20px'
	}
}

class App extends React.Component {

	render() {

		return (
			<div style={styles.mainContainer}>
				<Menu />
				<Home />
				{/*<Footer />*/}
			</div>
		)
	}
}

export default App
