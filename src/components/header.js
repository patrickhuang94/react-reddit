import React from 'react'
import { connect } from 'react-redux'
import { isEmpty, get } from 'lodash'

import Button from '../elements/button'
import { openRedditOAuth }  from '../utils'

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
  },
	userContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	username: {
		fontSize: 16
	},
	karma: {
		fontSize: 16,
		marginTop: 5
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

class Header extends React.Component {
	renderLogin = () => {
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

		const username = get(this.props.user, 'data.name',)
		const linkKarma = get(this.props.user, 'data.link_karma')
		const commentKarma = get(this.props.user, 'data.comment_karma')
		const totalKarma = linkKarma + commentKarma

		return (
			<div style={styles.userContainer}>
				<div style={styles.username}>Hi, {username}</div>
				<div style={styles.karma}>{totalKarma} karma</div>
			</div>
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

export default connect(mapStateToProps, null)(Header)
