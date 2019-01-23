import React from 'react'
import Radium from 'radium'

import { isEmpty, get } from 'lodash'

import Button from '../elements/button'
import Dropdown from '../elements/dropdown'
import { openRedditOAuth } from '../utils'
import colors from '../colors'

const styles = {
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: '75%',
    ':hover': {
      cursor: 'pointer',
      border: `1px solid ${colors.lightGray}`,
    }
  },
  avatar: {
    borderRadius: '50%',
    height: 35,
    width: 35,
    marginRight: 15,
    backgroundColor: colors.lightGray
  },
  usernameContainer: {

  },
  username: {
    color: colors.darkerGray,
    marginBottom: 3,
    fontSize: 14
  },
  karma: {
    color: colors.darkGray,
    fontSize: 13
  },
  button: {
    backgroundColor: colors.darkGray
  },
  dropdownIcon: {
    color: colors.redditOrange,
    marginLeft: 45
  },
  dropdownPosition: {
    right: 10,
    top: 43,
    width: 196
  }
}

class Avatar extends React.Component {
  state = {
    isDropdownOpen: false,
    dropdownOptions: ['Settings', 'Profile']
  }

  handleUserDropdownSelect = () => {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen })    
  }

  renderLoginButton () {
    return (
      <Button
        style={styles.button}
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
      <div style={styles.avatarContainer} onClick={this.handleUserDropdownSelect}>
        <img src={avatar} style={styles.avatar} />
        <div style={styles.usernameContainer}>
          <div style={styles.username}>{username}</div>
          <div style={styles.karma}>{totalKarma} karma</div>
        </div>
        <div key="popular" onClick={this.handleUserDropdownSelect}>
          <span style={styles.dropdownIcon}><i className="fas fa-caret-down"></i></span>
        </div>
        { this.state.isDropdownOpen &&
          <Dropdown 
            handleClick={this.handleUserDropdownSelect} 
            list={this.state.dropdownOptions}
            styles={styles.dropdownPosition}
          />
        }
      </div>
		)
  }
}

export default Radium(Avatar)