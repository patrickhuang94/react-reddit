import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Home extends React.Component {
	render() {
		return (
			<div>
				<p>This is home!</p>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
