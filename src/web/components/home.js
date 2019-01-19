import React from 'react'
import { connect } from 'react-redux'

import { fetchPosts, fetchMe } from '../actions'
import Card from './card'
// import Dropdown from '../elements/dropdown'
import colors from '../colors'

import { isEmpty } from 'lodash'

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
	postsContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	homepage: {
		fontSize: 22,
		color: colors.darkGray,
		marginBottom: 20,
		marginTop: 20
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: ({ sub, limit }) => dispatch(fetchPosts({ sub, limit })),
	fetchMe: () => dispatch(fetchMe())
})

const mapStateToProps = (state) => ({
	posts: state.posts.data,
	authentication: state.authentication,
	user: state.user,
	loading: state.ui.loading,
	subreddit: state.ui.currentSubreddit
})

class Home extends React.Component {
	componentDidMount () {
		this.props.fetchPosts({ sub: this.props.subreddit })

		if (!isEmpty(this.props.authentication)) {
			this.props.fetchMe()
		}
	}

	componentDidUpdate (prevProps) {
		if (prevProps.subreddit !== this.props.subreddit) {
			this.props.fetchPosts({ sub: this.props.subreddit })
		}
	}

	renderPosts () {
		return (
			<div style={styles.container}>
				<div style={styles.postsContainer}>
					{
						this.props.posts.map((post, index) =>
						<Card post={post} index={index} />)
					}
				</div>
			</div>
		)
	}

	render () {
		return (
			<div style={styles.homeContainer}>
				<div style={styles.homepage}>Homepage</div>
				{!isEmpty(this.props.posts) && this.renderPosts()}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)