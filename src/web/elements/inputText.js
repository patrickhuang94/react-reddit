import React from 'react'
import Radium from 'radium'
import colors from '../colors'

const styles = {
  input: {
    borderStyle: 'solid',
    borderColor: colors.border,
    outlineWidth: 0,
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 36,
    fontSize: 16,
    ':focus': {
      borderColor: colors.text
    }
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10
  }
}

function inputStyles ({bottomBorder}) {
  const borderWidth = bottomBorder ? '0 0 1px 0' : '1px'
  const borderRadius = bottomBorder ? 0 : 4

  return {
    borderWidth,
    borderRadius
  }
}

class InputText extends React.Component {
  render () {
    return (
      <div style={{display: 'flex', position: 'relative'}}>
        <span style={styles.icon}><i className={this.props.iconName}></i></span>
        <input
          style={{...inputStyles(this.props), ...styles.input, ...this.props.style}}
          type={this.props.password ? 'password' : 'text'}
        />
      </div>
    )
  }
}

export default Radium(InputText)
