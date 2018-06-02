import React from 'react'

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
  }
}

class Menu extends React.Component {

  render () {

    return (
      <div style={styles.leftMenu}>
        <div style={styles.searchBarContainer}>
          <p style={styles.searchBar}>search bar</p>
        </div>
      </div>
    )
  }
}

export default Menu
