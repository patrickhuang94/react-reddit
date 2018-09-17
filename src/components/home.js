import React from 'react'
import {connect} from 'react-redux'

import {fetchPosts, fetchMe} from '../actions'
import Card from './card'
import Dropdown from '../elements/dropdown'
import colors from '../colors'

import {isEmpty} from 'ramda'

const styles = {
	container: {
		height: '100%'
	},
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: colors.gray,
		width: '100%',
		padding: '0px 15px'
	},
	topicsContainer: {
		backgroundColor: colors.gray,
		minHeight: '70px',
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
	topic: {
		marginRight: 20,
		color: colors.darkGray
	},
	postsContainer: {
		display: 'flex',
		flexDirection: 'column'
	}
}

class Home extends React.Component {

	componentDidMount () {

		this.fetchPosts('all')

		if (!isEmpty(this.props.authentication)) {
			this.props.fetchMe()
		}
	}

	fetchPosts (subreddit) {

		this.props.fetchPosts({
			sub: subreddit,
			limit: 10
		})
	}

	renderPosts () {

		return (
			<div style={styles.container}>
				<div style={styles.postsContainer}>
					{
						this.props.posts.map((post, index) => {
							return <Card post={post} index={index} />
						})
					}
				</div>
			</div>
		)
	}

	render () {

		return (
			<div style={styles.homeContainer}>
				<div style={styles.topicsContainer}>
					<div style={styles.topic}>Popular</div>
					<div style={styles.topic}>New</div>
					<div style={styles.topic}>Rising</div>
					<div style={styles.topic}>Controversial</div>
					<div style={styles.topic}>Top</div>
					<div style={styles.topic}>Gilded</div>
					<div style={styles.topic}>Wiki</div>
				</div>

				{!isEmpty(this.props.posts) && this.renderPosts()}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: ({sub, limit}) => dispatch(fetchPosts({sub, limit})),
	fetchMe: () => dispatch(fetchMe)
})

const mapStateToProps = (state) => ({
	posts: state.posts.data,
	authentication: state.authentication,
	user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
