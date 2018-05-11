import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { push } from 'react-router-redux'

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
				<button onClick={this.props.changePage()}>Go to About page</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({changePage: () => push('/about')}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
