import React from 'react'
import colors from '../colors'

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
}

function textStyles ({color = 'white', type, size, bold, disabled}) {

  const fontSize = size === 'small' ? 12 : size === 'large' ? 18 : 15

  const base = {
    fontWeight: bold || type === 'secondary' ? '700' : '400',
    color,
    fontSize
  }

  return {
    ...base,
    ...styles.text
  }
}

function containerStyles ({color = colors.primary, disabled, size, type}) {

  const backgroundColor = disabled ? colors.gray : type === 'inverted' ? 'white' : color
  const borderColor = disabled ? colors.gray : color
  const padding = size === 'small' ? '10px 15px' : size === 'medium' ? '12px 22px' : '14px 30px'

  return {
    ...styles.button,
    backgroundColor,
    padding,
    borderColor,
    borderWidth: 1
  }
}

class Button extends React.Component {

  render () {

    return (
      <div
        style={{...containerStyles(this.props), ...this.props.style}}
        onClick={!this.props.disabled ? this.props.onClick : undefined}
      >
        {this.props.icon && this.props.icon}
        <div style={{...textStyles(this.props), ...this.props.textStyle}}>{this.props.title}</div>
      </div>
    )
  }
}

export default Button
