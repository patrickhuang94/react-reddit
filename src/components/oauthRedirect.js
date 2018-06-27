import React from 'react'

class OAuthRedirect extends React.Component {

  componentDidMount () {

    console.log(this.props.location)

    // do stuff with all the query param stuff

    // then redirect back to /home
  }

  render () {
    return null
  }
}

export default OAuthRedirect
