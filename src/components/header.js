import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Button from '../elements/button'
import Modal from '../elements/modal'
import Login from './login'
import colors from '../colors'
import {showModal} from '../actions'
import {openRedditOAuth}  from '../utils'

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

	render () {

		return (
			<div style={styles.headerContainer}>
				{this.props.ui.modalType === 'login' && <Login />}
				<div style={styles.redditHeader}>reddit</div>
				<Button
					uppercase
					title="login with reddit"
					size="small"
					onClick={openRedditOAuth}
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
