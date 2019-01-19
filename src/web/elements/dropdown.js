import React from 'react'

const styles = {
  dropdownContainer: {
    border: '1px solid #9B9B9B',
    backgroundColor: 'white',
    height: '30px',
    padding: '10px 0px',
    cursor: 'pointer',
    zIndex: 99
  },
  ul: {

  },
  li: {
    padding: '10px',
    backgroundColor: 'white',
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
            return <div style={styles.li}>{item}</div>
          })
        }
      </div>
    )
  }
}

export default Dropdown
