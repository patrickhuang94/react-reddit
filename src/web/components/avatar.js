import React from 'react'

import { isEmpty, get } from 'lodash'

import Button from '../elements/button'
import { openRedditOAuth } from '../utils'

const styles = {
  avatarContainer: {
    display: 'flex'
  },
  avatar: {
    borderRadius: '50%',
    height: 40,
    width: 40,
    marginRight: 15,
    backgroundColor: 'white'
  },
  usernameContainer: {

  },
  username: {
    color: 'white',
    marginBottom: 3
  },
  karma: {
    color: 'white'
  }
}

class Avatar extends React.Component {
  renderLoginButton () {
    return (
      <Button
        uppercase
        title="Login with reddit"
        size="small"
        onClick={openRedditOAuth}
      />
    )
  }

  render () {
    if (isEmpty(this.props.user)) {
      return this.renderLoginButton()
    }

    const username = get(this.props.user, 'data.name',)
		const linkKarma = get(this.props.user, 'data.link_karma')
		const commentKarma = get(this.props.user, 'data.comment_karma')
		const totalKarma = linkKarma + commentKarma
    const avatar = require('../images/reddit-icon.png')

		return (
      <div style={styles.avatarContainer}>
        <img src={avatar} style={styles.avatar} />
        <div style={styles.usernameContainer}>
          <div style={styles.username}>{username}</div>
          <div style={styles.karma}>{totalKarma} karma</div>
        </div>
      </div>
		)
  }
}

export default Avatar