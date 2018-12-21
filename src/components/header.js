import React from 'react'
import { connect } from 'react-redux'
import { isEmpty, get } from 'lodash'
import Cookies from 'js-cookie'

import Button from '../elements/button'
import { openRedditOAuth }  from '../utils'
import { fetchMe, addBearerToken, refreshBearerToken } from '../actions'

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		margin: '10px 10px',
		height: 60,
	},
	redditHeader: {
    fontSize: 24,
    color: 'black',
		display: 'flex',
    alignItems: 'center'
  },
	userContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginRight: 10,
		padding: '10px 20px',
		border: '1px solid black',
	},
	username: {
		fontSize: 16,
		fontWeight: 700
	},
	karma: {
		fontSize: 16,
		marginTop: 5
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	addBearerToken: ({ bearerToken }) => dispatch(addBearerToken({ bearerToken })),
	refreshBearerToken: () => dispatch(refreshBearerToken()),
	fetchMe: () => dispatch(fetchMe())
})

class Header extends React.Component {
	state = {
		isLoaded: false
	}

	async componentDidMount () {
		if (Cookies.get('bearer_token')) {
			if (Date.now() + 3600 > Cookies.get('expires_in')) {
				this.props.refreshBearerToken()
			} else {
				await this.props.addBearerToken({ bearerToken: { access_token: Cookies.get('bearer_token') } })
				await this.props.fetchMe()
			}
		}
		
		this.setState({ isLoaded: true })
	}

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

		const username = get(this.props.user, 'data.name',)
		const linkKarma = get(this.props.user, 'data.link_karma')
		const commentKarma = get(this.props.user, 'data.comment_karma')
		const totalKarma = linkKarma + commentKarma

		return (
			<div style={styles.userContainer}>
				<div style={styles.username}>{username}</div>
				<div style={styles.karma}>{totalKarma} karma</div>
			</div>
		)
	}

	render () {
		return (
			<div style={styles.headerContainer}>
				<div style={styles.redditHeader}>reddit</div>
				{!this.state.isLoaded ? null : this.renderLogin()}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
