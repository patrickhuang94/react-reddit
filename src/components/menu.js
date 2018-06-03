import React from 'react'
import Radium from 'radium'

import colors from '../colors'

const styles = {
  leftMenu: {
		width: '200px',
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
    marginTop: 15,
    marginBottom: 15
  },
  menuOption: {
    padding: '18px',
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

class Menu extends React.Component {

  renderMenuOptions () {

    return (
      <div style={styles.menuOptions}>
        <div style={styles.menuOption} key="home">
          <span style={styles.icon}><i className="fas fa-home"></i></span>
          Home
        </div>
        <div style={styles.menuOption} key="popular">
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

export default Radium(Menu)
