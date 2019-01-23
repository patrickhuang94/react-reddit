import React from 'react'

import colors from '../colors'

const styles = {
  dropdownContainer: {
    position: 'absolute',
    height: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  li: {
    padding: 10,
    backgroundColor: 'white',
    borderLeft: `1px solid ${colors.lightGray}`,
    borderRight: `1px solid ${colors.lightGray}`,
    borderBottom: `1px solid ${colors.lightGray}`
  }
}

const inputStyles = ({ top, right, width }) => {
  return {
    top,
    right,
    width
  }
}

class Dropdown extends React.Component {
  render () {
    return (
      <div style={{...styles.dropdownContainer, ...inputStyles(this.props.styles)}} onClick={this.props.handleClick}>
        { this.props.list.map(item => {
            return <div style={styles.li}>{item}</div>
          })
        }
      </div>
    )
  }
}

export default Dropdown
