import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { isEmpty } from 'lodash'

import colors from '../colors'

const styles = {
  leftMenu: {
		minWidth: '200px',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: colors.darkestGray
  },
  searchBarContainer: {
    height: '70px',
    backgroundColor: colors.darkGray
  },
  searchBar: {
    margin: '20px 15px 15px 10px',
    fontSize: 24,
    color: 'white'
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
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

class Menu extends React.Component {
  handleMenuSelect = (route) => {
    this.props.history.push(route)
  }

  renderMySubreddits() {
    return (
      <div style={styles.mySubreddits}>
        <p style={styles.mySubredditsTitle}>My Subreddits</p>
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
        <div style={styles.menuOption} key="all">
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

  render () {
    return (
      <div style={styles.leftMenu}>
        <div style={styles.searchBarContainer}>
          <p style={styles.searchBar}>search bar</p>
        </div>
        {this.renderMenuOptions()}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, null)(Radium(Menu)))
