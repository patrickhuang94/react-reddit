import React from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import { get, isEmpty } from 'lodash'

import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

import colors from '../colors'
import { openRedditOAuth, logout } from '../utils'

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
	headerBox: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 53,
		borderBottom: '2px solid white',
		borderLeft: `1px solid ${colors.lightGray}`,
		borderRight: `1px solid ${colors.lightGray}`,
	},
	headerBoxHovered: {
		display: 'flex',
		alignItems: 'center',
		borderBottom: `2px solid ${colors.redditOrange}`,
		minHeight: 53,
		cursor: 'pointer',
		borderLeft: `1px solid ${colors.lightGray}`,
		borderRight: `1px solid ${colors.lightGray}`,
	},
	headerBoxBorderLeft: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 53,
		borderBottom: '2px solid white',
		borderLeft: `1px solid ${colors.lightGray}`,
	},
	headerBoxBorderLeftHovered: {
		display: 'flex',
		alignItems: 'center',
		borderBottom: `2px solid ${colors.redditOrange}`,
		minHeight: 53,
		cursor: 'pointer',
		borderLeft: `1px solid ${colors.lightGray}`,
	},
	headerBoxText: {
		fontSize: 13,
		textTransform: 'uppercase',
		marginLeft: 10,
		marginRight: 10,
	},
	karma: {
		fontSize: 12,
		color: colors.gray,
	},
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
		isSignInHovered: false,
		selectedTab: 0,
	}

	onHover = (key) => {
		this.setState({ [key]: true })
	}

	onLeave = (key) => {
		this.setState({ [key]: false })
	}

	renderLoggedInHeader () {
		const { classes } = this.props
		const avatarSrc = require('../images/reddit-icon.png')
		const username = get(this.props.user, 'data.name')

		const linkKarma = get(this.props.user, 'data.link_karma')
		const commentKarma = get(this.props.user, 'data.comment_karma')
		const totalKarma = linkKarma + commentKarma
		
		const usernameContainerStyle = this.state.isUsernameHovered
			? classes.headerBoxBorderLeftHovered
			: classes.headerBoxBorderLeft
		const logoutContainerStyle = this.state.isLogoutHovered
			? classes.headerBoxHovered
			: classes.headerBox

		return (
			<React.Fragment>
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
					<div className={classes.headerBoxText} onClick={logout}>Log out</div>
				</div>
			</React.Fragment>
		)
	}

	renderLoggedOutHeader () {
		const { classes } = this.props
		const signInContainerStyle = this.state.isSignInHovered
			? classes.headerBoxHovered
			: classes.headerBox

		return (
			<div 
				className={signInContainerStyle}
				onMouseOver={() => this.onHover('isSignInHovered')} 
				onMouseLeave={() => this.onLeave('isSignInHovered')}
			>
				<div className={classes.headerBoxText} onClick={openRedditOAuth}>Sign in</div>
			</div>
		)
	}

	render () {
		const { classes } = this.props
		return (
			<div className={classes.headerContainer}>
				{isEmpty(this.props.user) ? this.renderLoggedOutHeader() : this.renderLoggedInHeader()}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Radium(Header)))
