import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getAccessToken} from '../actions'

class OAuthRedirect extends React.Component {

  componentDidMount () {

    // do stuff with all the query param stuff
    this.props.getAccessToken({code: this.props.location.query.code})
    alert(this.props.location.query.code)
    // then redirect back to /home
  }

  render () {
    return null
  }
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({getAccessToken}, dispatch)
}

export default connect(null, mapDispatchToProps)(OAuthRedirect)
