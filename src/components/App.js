import React from 'react'

import Header from './header'
import Footer from './footer'

import logo from '../logo.svg'
import '../App.css'

const mainContainer = {
	display: 'flex',
	justifyContent: 'center'
}

const headingContainer = {
	marginTop: '20px'
}

class App extends React.Component {
	render() {
		return (
			<div style={mainContainer}>
				<Header />
				<Footer />
			</div>
		)
	}
}

export default App
