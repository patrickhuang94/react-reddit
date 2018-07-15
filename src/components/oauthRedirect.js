import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import queryString from 'query-string'

import {getAccessToken} from '../actions'

class OAuthRedirect extends React.Component {

  componentDidMount () {

    const code = queryString.parse(this.props.location.search)
    this.props.getAccessToken({code})
    .then(() => {
      // then redirect back to /home
      // this.props.router.push('/home')
      return
    })
  }

  render () {

    return null
  }
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({getAccessToken}, dispatch)
}

export default connect(null, mapDispatchToProps)(OAuthRedirect)
