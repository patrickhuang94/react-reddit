import React from 'react'

import Header from './header'
import Menu from './menu'
import Home from './home'

import '../App.css'

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection:' column',
		height: '100%'
	},
	page: {
		display: 'flex'
	}
}

const App = () => {
	return (
		<div style={styles.mainContainer}>
			<Header />
			<div style={styles.page}>
				<Menu />
				<Home />
			</div>
		</div>
	)
}

export default App
