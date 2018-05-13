import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { push } from 'react-router-redux'

const homeContainer = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ddd',
	height: '500px'
}

class Home extends React.Component {

	constructor () {

		super()

		this.state = {
			posts: null
		}
	}

	componentDidMount () {

		// Fetch Reddit API
		this.fetchPosts()
	}

	handlePosts (res) {

		this.setState({posts: res})
	}

	fetchPosts () {

		const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      cors: true,
      credentials: 'same-origin'
    }

		const fetchUrl = 'https://www.reddit.com/r/all.json?limit=5'
		fetch(fetchUrl, options)
			.then(res => {
				res.json().then(data => {
					console.log({data})
					return data
				})

				return res
			})
			.catch(err => console.error(err))
	}

	render () {

		return (
			<div style={homeContainer}>
				<p>This is home!</p>
				<p>{this.state.posts}</p>
				<button onClick={this.props.changePage}>Go to About page</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({changePage: () => push('/about')}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
