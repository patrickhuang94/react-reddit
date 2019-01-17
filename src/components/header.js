import React from 'react'
import { connect } from 'react-redux'
import { isEmpty, get } from 'lodash'
import colors from '../colors'

import Button from '../elements/button'
import { openRedditOAuth }  from '../utils'
import { 
	fetchMe,
	persistToken
} from '../actions'

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		margin: '10px 10px',
		height: 40
	},
	redditHeader: {
    fontSize: 24,
    color: colors.darkestGray,
		display: 'flex',
    alignItems: 'center'
  },
	usernameContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10
	},
	username: {
		color: colors.darkestGray,
		fontSize: 16,
		marginRight: 5
	},
	karma: {
		color: colors.purple,
		fontSize: 16
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	persistToken: () => dispatch(persistToken()),
	fetchMe: () => dispatch(fetchMe())
})

class Header extends React.Component {
	state = {
		isLoaded: false
	}

	componentDidMount () {
		this.props.persistToken()
		this.props.fetchMe()
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
			<div style={styles.usernameContainer}>
				<div style={styles.username}>{username}
				</div>
				<div style={styles.karma}>({totalKarma})</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
