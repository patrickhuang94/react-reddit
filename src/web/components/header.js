import React from 'react'
import { connect } from 'react-redux'
import colors from '../colors'

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: colors.lighterGray,
		marginLeft: 250,
		paddingLeft: 10,
		paddingRight: 10,
		height: 70
	},
	redditHeader: {
    fontSize: 24,
    color: colors.darkestGray,
		display: 'flex',
    alignItems: 'center'
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
				<div style={styles.redditHeader}>react reddit</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
