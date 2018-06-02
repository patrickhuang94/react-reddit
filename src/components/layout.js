import React from 'react'

import Menu from './menu'
import Home from './home'

const styles = {
  container: {
    display: 'flex'
  }
}

class Layout extends React.Component {

  render () {

    return (
      <div style={styles.container}>
        <Menu />
        <Home />
      </div>
    )
  }
}

export default Layout
