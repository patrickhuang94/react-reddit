import React from 'react'

const styles = {
  leftMenu: {
		width: '200px',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#35363B'
  },
  redditHeaderContainer: {
    height: '70px',
    backgroundColor: '#4E525A'
  },
  redditHeader: {
    margin: '20px 15px 15px 10px',
    fontSize: 24,
    color: 'white'
  }
}

class Menu extends React.Component {

  render () {

    return (
      <div style={styles.leftMenu}>
        <div style={styles.redditHeaderContainer}>
          <p style={styles.redditHeader}>reddit</p>
        </div>
      </div>
    )
  }
}

export default Menu
