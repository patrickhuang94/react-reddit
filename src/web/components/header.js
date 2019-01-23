import React from 'react'
import { connect } from 'react-redux'
import colors from '../colors'
import Avatar from '../components/avatar'

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: colors.lighterGray,
		marginLeft: 200,
		paddingLeft: 10,
		paddingRight: 10,
		height: 60
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
				<Avatar user={this.props.user} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
