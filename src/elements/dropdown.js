import React from 'react'

const styles = {
  base: {
    border: '1px solid black',
    padding: '5px 10px'
    // width: '30px',
    // height: '30px'
  },
  title: {
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: 16
  },
  submenu: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    right: 0,
    width: 240,
  },
  submenuExpanded: {
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    marginBottom: 10
  }
}

class Dropdown extends React.Component {

  state = {
    isExpanded: false
  }

  handleDropdownClick = (e) => {

    e.stopPropagation() // what does this do
    this.toggleDropdown()
  }

  toggleDropdown = () => {

    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  renderLinks () {

    return React.Children.map(this.props.children, (link) => {

      if (!link) {
        return null
      }

      return React.cloneElement(link, {
        style: styles.link
      })
    })
  }

  render () {

    return (
      <div style={styles.base}>
        <span style={styles.title} onClick={this.handleDropdownClick}>
          {this.props.title} <i className="fas fa-caret"></i>
        </span>
        <div style={[
          styles.submenu, // should be hidden
          this.state.isExpanded ? this.styles.subMenuExpanded : {}
        ]}>
          {this.renderLinks()}
        </div>
      </div>
    )
  }
}

export default Dropdown
