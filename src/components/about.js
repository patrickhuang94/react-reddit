import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const aboutContainer = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ddd',
	height: '500px'
}

class About extends React.Component {
	render() {
		return (
			<div style={aboutContainer}>
				<p>This is the about page</p>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch)
}

export default connect(null, mapDispatchToProps)(About)
