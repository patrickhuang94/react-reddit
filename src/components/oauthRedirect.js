import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'

import {getBearerToken} from '../actions'

class OAuthRedirect extends React.Component {
  async componentDidMount () {
    const code = queryString.parse(this.props.location.search)
    await this.props.getBearerToken({code})
    this.props.history.push('/home')
  }

  render () {
    return null
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBearerToken: ({code}) => dispatch(getBearerToken({code}))
})

export default withRouter(connect(null, mapDispatchToProps)(OAuthRedirect))
