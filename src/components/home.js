import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchPosts} from '../actions'
import Card from './card'
import Dropdown from '../elements/dropdown'
import colors from '../colors'

import {isEmpty} from 'lodash'

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

	state = {
		response: ''
	}

	componentDidMount () {

		this.fetchPosts('all')

		// this.callApi()
		// 	.then(res => this.setState({response: res}))
		// 	.catch(err => console.log(err))
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

	renderPosts () {

		return (
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
		)
	}

	render () {

		return (
			<div style={styles.homeContainer}>
				<div style={styles.topicsContainer}>
					{/*<button onClick={() => this.fetchPosts('all')}>Fetch subreddit</button>*/}
					<div style={styles.topic}>Popular</div>
					<div style={styles.topic}>New</div>
					<div style={styles.topic}>Rising</div>
					<div style={styles.topic}>Controversial</div>
					<div style={styles.topic}>Top</div>
					<div style={styles.topic}>Gilded</div>
					<div style={styles.topic}>Wiki</div>
				</div>

				{this.renderPosts()}
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
