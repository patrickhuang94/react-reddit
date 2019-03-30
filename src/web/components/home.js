import React from 'react'
import { connect } from 'react-redux'

import { fetchPosts, fetchMe, getTokenFromCookies, updateCurrentSubreddit } from '../actions'
import SidePanel from './sidePanel'
import Posts from './posts'
import Loading from './loading'

import colors from '../colors'

const styles = {
	homeContainer: {
		display: 'flex',
		margin: '20px 10vw',
		backgroundColor: colors.lightestGray,
	},
	postsLoadingContainer: {
		width: '100%',
	},
}

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: ({ sub, limit }) => dispatch(fetchPosts({ sub, limit })),
	fetchMe: () => dispatch(fetchMe()),
	getTokenFromCookies: () => dispatch(getTokenFromCookies()),
	updateCurrentSubreddit: ({ subreddit }) => dispatch(updateCurrentSubreddit({ subreddit })),
})

const mapStateToProps = (state) => ({
	posts: state.posts.data,
	authentication: state.authentication,
	user: state.user,
	currentSubreddit: state.ui.currentSubreddit,
	isLoading: state.ui.isLoading,
})

class Home extends React.Component {
	state = {
		subreddits: [
			{ category: 'all', icon: 'fas fa-home', name: 'All' },
			{ category: 'popular', icon: 'fas fa-heart', name: 'Popular' },
			{ category: 'nba', icon: 'fas fa-basketball-ball', name: 'NBA' },
			{ category: 'pics', icon: 'fas fa-camera', name: 'pics' },
		],
	}

	async componentDidMount() {
		this.props.fetchPosts({ sub: this.props.currentSubreddit })
		this.props.fetchMe()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currentSubreddit !== this.props.currentSubreddit) {
			this.props.fetchPosts({ sub: this.props.currentSubreddit })
		}
	}

	handleCategorySelect = (category) => () => {
		this.props.updateCurrentSubreddit({ subreddit: category })
	}

	render() {
		return (
			<div style={styles.homeContainer}>
				<SidePanel
					items={this.state.subreddits}
					selectedRow={this.props.currentSubreddit}
					handleSelect={this.handleCategorySelect}
					title="Categories"
				/>
				<div style={styles.postsLoadingContainer}>
					{this.props.isLoading ? <Loading /> : <Posts posts={this.props.posts} />}
				</div>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
