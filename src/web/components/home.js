import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { fetchPosts, fetchMe, getTokenFromCookies} from '../actions'
import Categories from './categories'
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
})

const mapStateToProps = (state) => ({
	posts: state.posts.data,
	authentication: state.authentication,
	user: state.user,
	loading: state.ui.loading,
	subreddit: state.ui.currentSubreddit,
	isLoading: state.ui.isLoading,
})

class Home extends React.Component {
	async componentDidMount () {
		this.props.fetchPosts({ sub: this.props.subreddit })
		this.props.fetchMe()
	}

	componentDidUpdate (prevProps) {
		if (prevProps.subreddit !== this.props.subreddit) {
			this.props.fetchPosts({ sub: this.props.subreddit })
		}
	}

	render () {
		return (
			<div style={styles.homeContainer}>
				<div style={styles.postsLoadingContainer}>
					{this.props.isLoading ? <Loading /> : <Posts posts={this.props.posts} />}
				</div>
				<Categories />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
