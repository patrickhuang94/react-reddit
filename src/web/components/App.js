import React from 'react'

import Header from './header'
import Sidebar from './sidebar'
import Home from './home'

import '../App.css'

const styles = {
	mainContainer: {
		display: 'flex',
		height: '100%',
		overflow: 'hidden'
	},
	content: {
		display: 'flex',
		flexDirection: 'column'
	}
}

const App = () => {
	// return (
	// 	<div style={styles.mainContainer}>
	// 		{/* <Sidebar /> */}
	// 		<div style={styles.content}>
	// 			{/* <Header /> */}
	// 			<Home />
	// 		</div>
	// 	</div>
	// )
	return <div></div>
}

export default App
