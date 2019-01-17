import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import { getBearerToken, fetchMe } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  getBearerToken: ({ code }) => dispatch(getBearerToken({ code })),
  fetchMe: () => dispatch(fetchMe())
})

class OAuthRedirect extends React.Component {
  async componentDidMount () {
    const code = queryString.parse(this.props.location.search)
    await this.props.getBearerToken({ code })
    await this.props.fetchMe()
  }

  render () {
    this.props.history.push('/') // not the right place to put it...
    return null
  }
}

export default withRouter(connect(null, mapDispatchToProps)(OAuthRedirect))
