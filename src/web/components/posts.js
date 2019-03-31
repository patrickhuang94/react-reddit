import React from 'react'
import { connect } from 'react-redux'
import colors from '../colors'

import Post from './post'

const styles = {
	postsContainer: {
		display: 'flex',
		flexDirection: 'column',
		borderTop: `1px solid ${colors.lightGray}`,
		borderLeft: `1px solid ${colors.lightGray}`,
		borderRight: `1px solid ${colors.lightGray}`,
	},
}

const mapDispatchToProps = (dispatch) => ({})

const mapStateToProps = (state) => ({
	// posts: state.posts.data,
})

class Posts extends React.Component {
	render() {
		return (
			<div style={styles.postsContainer}>
				{this.props.posts && this.props.posts.map((post, index) => <Post post={post} key={index} index={index} />)}
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Posts)
