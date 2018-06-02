import React from 'react'

import Header from './header'
import Layout from './layout'

import logo from '../logo.svg'
import '../App.css'

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection:' column',
		height: '100%'
	}
}

class App extends React.Component {

	render() {

		return (
			<div style={styles.mainContainer}>
				<Header />
				<Layout />
			</div>
		)
	}
}

export default App
