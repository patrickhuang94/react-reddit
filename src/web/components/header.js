import React from 'react'
import { connect } from 'react-redux'
import colors from '../colors'

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
		marginRight: 10,
		border: `1px solid ${colors.darkestGray}`,
		padding: '0px 10px'
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

})

class Header extends React.Component {
	render () {
		return (
			<div style={styles.headerContainer}>
				<div style={styles.redditHeader}>reddit</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
