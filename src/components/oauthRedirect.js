import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import queryString from 'query-string'

import {getBearerToken} from '../actions'

import {isEmpty} from 'ramda'

class OAuthRedirect extends React.Component {

  componentDidMount () {

    const code = queryString.parse(this.props.location.search)

    this.props.getBearerToken({code})
      .then(() => this.props.history.push('/home'))
  }

  render () {

    return null
  }
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({getBearerToken}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(OAuthRedirect))
