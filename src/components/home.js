import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const homeContainer = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ddd',
	height: '500px'
}

class Home extends React.Component {
	render() {
		return (
			<div style={homeContainer}>
				<p>This is home!</p>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
