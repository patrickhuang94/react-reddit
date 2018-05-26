import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchPosts} from '../actions'

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		backgroundColor: '#FF5700',
		height: '100px',
		width: '100%'
	},
	categoryContainer: {
		display: 'flex'
	},
	categoryStyle: {
		margin: '10px 15px',
		color: 'white'
	},
	button: {
		backgroundColor: '#FF5700'
	}
}

class Header extends React.Component {
	render() {

		return (
			<div style={styles.headerContainer}>
				<div style={styles.categoryContainer}>
					<p>Popular</p>
					<p>All</p>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
