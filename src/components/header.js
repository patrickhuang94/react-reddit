import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Button from '../elements/button'
import Modal from '../elements/modal'
import colors from '../colors'
import {fetchPosts, showModal, hideModal} from '../actions'

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

		this.props.showModal('login')
	}

	renderLoginModal () {

		if (this.props.ui.modalType === 'login') {
			return (
				<Modal>
					<div>Modal here</div>
				</Modal>
			)
		}

		return null
	}

	render () {

		return (
			<div style={styles.headerContainer}>
				{this.renderLoginModal()}
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

function mapStateToProps (state) {

	return {
		ui: state.ui
	}
}


function mapDispatchToProps (dispatch) {

	return bindActionCreators({fetchPosts, showModal, hideModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
