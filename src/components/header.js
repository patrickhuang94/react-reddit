import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Button from '../elements/button'
import Modal from '../elements/modal'
import Login from './login'
import colors from '../colors'
import {showModal} from '../actions'

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

		// this.props.showModal('login')

		const REDDIT_CLIENT_ID = 'LeltpchMUToy9w' // TODO: Put in .env
		const REDIRECT_URI = 'http://localhost:3000'
		const url = `https://www.reddit.com/api/v1/authorize?client_id=${REDDIT_CLIENT_ID}&response_type=code&state=random_string_here&redirect_uri=${REDIRECT_URI}&redirect_uri=permanent&scope=identity`
		// open reddit oauth page
		window.location.assign(url)
	}

	render () {

		return (
			<div style={styles.headerContainer}>
				{this.props.ui.modalType === 'login' && <Login />}
				<div style={styles.redditHeader}>reddit</div>
				<Button
					uppercase
					title="login with reddit"
					size="small"
					onClick={this.handleLogin}
				/>
			</div>
		)
	}
}

function mapStateToProps (state) {

	return {
		ui: state.ui
	}
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({showModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
