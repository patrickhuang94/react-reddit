import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchPosts} from '../actions'

const styles = {
	headerContainer: {
		display: 'flex',
		backgroundColor: 'white',
		height: '70px'
	},
	redditHeader: {
    margin: '20px 15px 15px 10px',
    fontSize: 24,
    color: 'black'
  }
}

class Header extends React.Component {
	render() {

		return (
			<div style={styles.headerContainer}>
				<div style={styles.redditHeader}>reddit</div>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
