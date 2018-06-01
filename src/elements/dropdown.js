import React from 'react'

const styles = {
  dropdownContainer: {
    border: '1px solid #9B9B9B',
    backgroundColor: 'white',
    padding: '10px',
    height: '20px',
    // width: '130px',
    cursor: 'pointer',
    zIndex: 99
  },
  ul: {

  },
  li: {
    // position: 'absolute',
    // position: 'fixed',
    marginRight: 12,
    padding: '10px',
    backgroundColor: 'white',
    width: '100%',
    border: '1px solid #9B9B9B',
    zIndex: 99
  }
}

class Dropdown extends React.Component {

  state = {
    isOpen: false
  }

  toggleList = () => {

    this.setState({isOpen: !this.state.isOpen})
  }

  render () {

    return (
      <div style={styles.dropdownContainer} onClick={this.toggleList}>
        <div>{this.props.title}</div>
        { this.state.isOpen &&
          this.props.list.map(item => {
            return <div key={item.id} style={styles.li}>{item.title}</div>
          })
        }
      </div>
    )
  }
}

export default Dropdown
