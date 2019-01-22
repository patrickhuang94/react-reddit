import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { isEmpty } from 'lodash'

import colors from '../colors'
import { updateCurrentSubreddit } from '../actions'
import Avatar from './avatar'

import { fetchMe, persistToken } from '../actions'

const styles = {
  leftMenu: {
    position: 'fixed',
    minWidth: '250px',
    height: '100%',
		display: 'flex',
    flexDirection: 'column',
		backgroundColor: colors.darkerGray
  },
  userContainer: {
    backgroundColor: colors.darkestGray,
    height: '70px'
  },
  user: {
    margin: 20
  },
  menuOptions: {
    margin: 15
  },
  menuOption: {
    paddingTop: 18,
    paddingBottom: 18,
    fontSize: 16,
    color: colors.lightestGray,
    cursor: 'pointer',
    ':hover': {
      color: 'white',
      cursor: 'pointer'
    }
  },
  icon: {
    marginRight: 10
  },
  mySubreddits: {
    display: 'flex',
    flexDirection: 'column'
  },
  mySubredditsTitle: {
    fontSize: 18,
    color: 'white'
  },
  footer: {
    display: 'flex',
    margin: 15,
    color: 'white'
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  updateCurrentSubreddit: ({ subreddit }) => dispatch(updateCurrentSubreddit({ subreddit })),
  persistToken: () => dispatch(persistToken()),
	fetchMe: () => dispatch(fetchMe())
})

class Sidebar extends React.Component {
  componentDidMount () {
    this.props.persistToken()
    this.props.fetchMe()
  }

  handleMenuSelect = (route) => {
    this.props.updateCurrentSubreddit({ subreddit: route })
    this.props.history.push(route)
  }

  renderMySubreddits() {
    return (
      <div style={styles.mySubreddits}>
        <p style={styles.mySubredditsTitle}>My Subreddits</p>
      </div>
    )
  }

  renderUser () {
    return (
      <div style={styles.userContainer}>
        <div style={styles.user}>
          <Avatar user={this.props.user} />
        </div>
      </div>
    )
  }

  renderMenuOptions () {
    return (
      <div style={styles.menuOptions}>
        <div style={styles.menuOption} key="home">
          <span style={styles.icon}><i className="fas fa-home"></i></span>
          Home
        </div>
        <div style={styles.menuOption} key="popular" onClick={() => this.handleMenuSelect('popular')}>
          <span style={styles.icon}><i className="fas fa-heart"></i></span>
          Popular
        </div>
        <div style={styles.menuOption} key="all" onClick={() => this.handleMenuSelect('all')}>
          <span style={styles.icon}><i className="fas fa-rocket"></i></span>
          All
        </div>
        <div style={styles.menuOption} key="random">
          <span style={styles.icon}><i className="fas fa-random"></i></span>
          Random
        </div>

        {!isEmpty(this.props.user) && this.renderMySubreddits()}
      </div>
    )
  }

  renderFooter () {
    return (
      <div style={styles.footer}>
        <div>github</div>
        <div style={{marginLeft: 5, marginRight: 5}}>|</div>
        <div>about</div>
      </div>
    )
  }

  render () {
    return (
      <div style={styles.leftMenu}>
        {this.renderUser()}
        {this.renderMenuOptions()}
        {/* {this.renderFooter()} */}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(Sidebar)))
