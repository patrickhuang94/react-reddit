import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchPosts} from '../actions'
import Card from './card'
import Dropdown from '../elements/dropdown'

import {isEmpty} from 'lodash'

const styles = {
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	container: { // TODO: rename
		height: '100%',
		overflow: 'scroll'
	},
	headerContainer: {
		backgroundColor: 'gray',
		minHeight: '70px',
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
	postsContainer: {
		display: 'flex',
		flexDirection: 'column'
	}
}

class Home extends React.Component {

	componentDidMount () {

		this.fetchPosts('all')
	}

	fetchPosts (subreddit) {

		this.props.fetchPosts({
			sub: subreddit,
			limit: 10
		})
	}

	render () {

		return (
			<div style={styles.homeContainer}>
				<div style={styles.headerContainer}>
					<Dropdown title='Subreddits'>
						
					</Dropdown>
				</div>

				<div style={styles.container}>
					<button onClick={() => this.fetchPosts('all')}>Fetch subreddit</button>
					<div style={styles.postsContainer}>
						{
							!isEmpty(this.props.posts) &&
							this.props.posts.map((post, index) => {
								return <Card post={post} index={index} />
							})
						}
					</div>
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
