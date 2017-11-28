import React from 'react'

const headerContainer = {
	display: 'flex',
	justifyContent: 'flex-start',
	backgroundColor: '#FF5700',
	width: '100%'
}

const categoryContainer = {
	display: 'flex'
}

const categoryStyle = {
	margin: '10px 15px',
	color: 'white'
}

class Header extends React.Component {
	render() {
		return (
			<div style={headerContainer}>
				<div style={categoryContainer}>
					<p style={categoryStyle}>Popular</p>
					<p style={categoryStyle}>All</p>
				</div>
			</div>
		)
	}
}

export default Header
