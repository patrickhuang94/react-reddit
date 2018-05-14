import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'

import {fetchPosts} from '../actions'

import {isEmpty, get} from 'lodash'

const homeContainer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ddd',
	height: '500px'
}

class Home extends React.Component {

	constructor () {

		super()

		this.state = {
			sub: null,
			limit: null
		}
	}

	fetchPosts = () => {

		this.props.fetchPosts({
			sub: 'all',
			limit: 10
		})
	}

	renderLists () {

		const posts = this.props.posts

		return posts.map((post, index) => {
			const thumbnail = get(post, ['data', 'thumbnail'])

			return (
				<div style={{height: '100px', width: '100px', margin: '10px'}} key={index}>
					<img src={thumbnail} />
				</div>
			)
		})
	}

	render () {

		return (
			<div style={homeContainer}>
				<button onClick={this.fetchPosts}>Fetch subreddit</button>
				<div style={{display: 'flex', flexWrap: 'wrap'}}>
					{!isEmpty(this.props.posts) && this.renderLists()}
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {

	return bindActionCreators({fetchPosts}, dispatch)
}

function mapStateToProps(state) {

	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
