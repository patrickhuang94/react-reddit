import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Button from '../elements/button'
import colors from '../colors'
import {fetchPosts} from '../actions'

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		margin: '20px 10px'
	},
	redditHeader: {
    fontSize: 24,
    color: 'black',
		display: 'flex',
    alignItems: 'center'
  }
}

class Header extends React.Component {

	handleLogin = () => {
		console.log('handleLogin clicked')
	}

	render () {

		return (
			<div style={styles.headerContainer}>
				<div style={styles.redditHeader}>reddit</div>
				<Button
					uppercase
					title="login"
					size="small"
					onClick={this.handleLogin}
				/>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
