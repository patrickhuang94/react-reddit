import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { isEmpty } from 'lodash'

import colors from '../colors'
import { updateCurrentSubreddit } from '../actions'

import { fetchMe, persistToken } from '../actions'

const styles = {
  leftMenu: {
    position: 'fixed',
    minWidth: 200,
    height: '100%',
		display: 'flex',
    flexDirection: 'column',
		backgroundColor: colors.darkestGray
  },
  userContainer: {
    backgroundColor: colors.black,
    height: 70
  },
  user: {
    margin: 20
  },
  menuOptions: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  menuHeader: {
    fontSize: 17,
    color: colors.gray,
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: 10
  },
  mySubreddits: {
    display: 'flex',
    flexDirection: 'column'
  },
  subredditTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    color: colors.lightestGray
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
  state = {
    selectedSubreddit: null
  }

  componentDidMount () {
    this.props.persistToken()
    this.props.fetchMe()
  }

  handleMenuSelect = () => (route) => {
    this.props.updateCurrentSubreddit({ subreddit: route })
    this.props.history.push(route)
  }

  renderMySubreddits() {
    return (
      <div style={styles.mySubreddits}>
        <div style={styles.menuHeader}>My Subreddits</div>
        <div style={styles.subredditTitle} onClick={this.handleMenuSelect('aww')}>r/aww</div>
        <div style={styles.subredditTitle} onClick={this.handleMenuSelect('pics')}>r/pics</div>
        <div style={styles.subredditTitle} onClick={this.handleMenuSelect('nba')}>r/nba</div>
      </div>
    )
  }

  renderMenuOptions () {
    return (
      <div style={styles.menuOptions}>
        <div style={styles.menuHeader}>
          Menu
        </div>
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
          Rando??m
        </div>

        {!isEmpty(this.props.user) && this.renderMySubreddits()}
      </div>
    )
  }

  render () {
    return (
      <div style={styles.leftMenu}>
        {this.renderMenuOptions()}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(Sidebar)))
