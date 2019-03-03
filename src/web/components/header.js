import React from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import { get } from 'lodash'

import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

import colors from '../colors'

// import { openRedditOAuth } from '../utils'

const styles = () => ({
	headerContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: 'white',
		paddingLeft: 10,
		minHeight: 55,
		padding: '0 10vw',
	},
	avatar: {
		backgroundColor: colors.lightestGray,
		marginLeft: 10,
	},
	usernameAndKarmaContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		marginLeft: 10,
		marginRight: 10,
	},
	usernameContainer: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 53,
		borderBottom: '2px solid white',
		borderLeft: `1px solid ${colors.lightestGray}`,
	},
	usernameContainerHovered: {
		display: 'flex',
		alignItems: 'center',
		borderBottom: `2px solid ${colors.redditOrange}`,
		minHeight: 53,
		cursor: 'pointer',
		borderLeft: `1px solid ${colors.lightestGray}`,
	},
	username: {
		fontSize: 13,
		textTransform: 'uppercase',
	},
	karma: {
		fontSize: 12,
		color: colors.gray,
	},
	logoutContainer: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 53,
		borderBottom: '2px solid white',
		borderLeft: `1px solid ${colors.lightestGray}`,
		borderRight: `1px solid ${colors.lightestGray}`,
	},
	logoutContainerHovered: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 53,
		borderBottom: `2px solid ${colors.redditOrange}`,
		cursor: 'pointer',
		borderLeft: `1px solid ${colors.lightestGray}`,
		borderRight: `1px solid ${colors.lightestGray}`,
	},
	logout: {
		fontSize: 13,
		textTransform: 'uppercase',
		marginLeft: 10,
		marginRight: 10,
	}
})

const mapStateToProps = (state) => ({
	user: state.user,
})

const mapDispatchToProps = (dispatch) => ({

})

class Header extends React.Component {	
	state = {
		isUsernameHovered: false,
		isLogoutHovered: false,
		selectedTab: 0,
	}

	onHover = (key) => {
		this.setState({ [key]: true })
	}

	onLeave = (key) => {
		this.setState({ [key]: false })
	}

	render () {
		const { classes } = this.props
		const avatarSrc = require('../images/reddit-icon.png')
		const username = get(this.props.user, 'data.name')

		const linkKarma = get(this.props.user, 'data.link_karma')
		const commentKarma = get(this.props.user, 'data.comment_karma')
		const totalKarma = linkKarma + commentKarma

		const usernameContainerStyle = this.state.isUsernameHovered
			? classes.usernameContainerHovered
			: classes.usernameContainer
		const logoutContainerStyle = this.state.isLogoutHovered
			? classes.logoutContainerHovered
			: classes.logoutContainer

		return (
			<div className={classes.headerContainer}>
				<div 
					className={usernameContainerStyle}
					onMouseOver={() => this.onHover('isUsernameHovered')} 
					onMouseLeave={() => this.onLeave('isUsernameHovered')}
				>
					<Avatar src={avatarSrc} className={classes.avatar} />
					<div className={classes.usernameAndKarmaContainer}>
						<div className={classes.username}>{username}</div>
						<div className={classes.karma}>{totalKarma} karma</div>
					</div>
				</div>

				<div 
					className={logoutContainerStyle}
					onMouseOver={() => this.onHover('isLogoutHovered')}
					onMouseLeave={() => this.onLeave('isLogoutHovered')}
				>
					<div className={classes.logout}>Log out</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Radium(Header)))
