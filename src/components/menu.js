import React from 'react'

const styles = {
  leftMenu: {
		width: '200px',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#35363B'
  },
  searchBarContainer: {
    height: '70px',
    backgroundColor: '#4E525A'
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
