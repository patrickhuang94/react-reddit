import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'

import {fetchPosts} from '../actions'
import Card from './card'

import {isEmpty} from 'lodash'

const styles = {
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ddd',
		minHeight: '500px'
	},
	postsContainer: {
		display: 'flex',
		flexDirection: 'column'
	}
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

	render () {

		return (
			<div style={styles.homeContainer}>
				<button onClick={this.fetchPosts}>Fetch subreddit</button>
				<div style={styles.postsContainer}>
					{
						!isEmpty(this.props.posts) &&
						this.props.posts.map((post, index) => {
							return <Card post={post} index={index} />
						})
					}
				</div>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({fetchPosts}, dispatch)
}

function mapStateToProps (state) {

	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
