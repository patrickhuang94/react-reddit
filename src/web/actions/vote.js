import { vote } from '../services/voteService'
import { fetchUpvoted } from '../actions/user' // TODO: use service file instead!
import { updatePost } from '../actions/posts'

export const votePost = ({ fullNameId, direction }) => async (dispatch, getState) => {
	const state = getState()
	const token = state.authentication.access_token
	const username = state.user.name

	await vote({
		fullNameId,
		direction,
		token,
	})

	const post = state.posts.data.find((post) => post.name === fullNameId)
	const updatedPost = {
		...post,
		likes: true,
	}

	dispatch(updatePost(updatedPost))

	// const posts = await fetchUpvoted({
	// 	username,
	// 	token,
	// })

	// const upvotedPost = posts.find((post) => post.data.name === fullNameId)
	// const upvotedPostData = upvotedPost.data
	// dispatch(updatePost(upvotedPostData))
}
