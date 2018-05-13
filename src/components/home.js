import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'

import {fetchPosts} from '../actions'

const homeContainer = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ddd',
	height: '500px'
}

class Home extends React.Component {

	constructor () {

		super()

		this.state = {
			posts: null,
			sub: null,
			limit: null
		}
	}

	componentDidMount () {

		this.props.fetchPosts({
			sub: this.state.sub,
			limit: this.state.limit
		})
	}

	render () {

		return (
			<div style={homeContainer}>
				<p>This is home!</p>
				<p>{this.state.posts}</p>
				<button onClick={this.props.changePage}>Go to About page</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
