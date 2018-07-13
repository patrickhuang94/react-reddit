import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Button from '../elements/button'
import Modal from '../elements/modal'
import Login from './login'
import colors from '../colors'
import {showModal} from '../actions'
import {openRedditOAuth}  from '../utils'

import {isEmpty} from 'ramda'

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

	renderLogin () {

		if (isEmpty(this.props.user)) {
			return (
				<Button
					uppercase
					title="login with reddit"
					size="small"
					onClick={openRedditOAuth}
				/>
			)
		}

		return (
			<div>Welcome, {this.props.user.name}</div>
		)
	}

	render () {

		return (
			<div style={styles.headerContainer}>
				<div style={styles.redditHeader}>reddit</div>
				{this.renderLogin()}
			</div>
		)
	}
}

function mapStateToProps (state) {

	return {
		user: state.user
	}
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({showModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
