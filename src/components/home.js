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
		backgroundColor: '#F5F5F5',
		minHeight: '70px',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '10px',
		// padding: '0px 10px'
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

	onSelect = () => {

		return
	}

	render () {

		return (
			<div style={styles.homeContainer}>
				<div style={styles.headerContainer}>
					<Dropdown
						title="Choose an option"
						list={[
							{
								id: 0,
								title: 'all'
							},
							{
								id: 1,
								title: 'pics'
							},
							{
								id: 2,
								title: 'funny'
							}
						]}
					/>
					<button onClick={() => this.fetchPosts('all')}>Fetch subreddit</button>
				</div>

				<div style={styles.container}>
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
