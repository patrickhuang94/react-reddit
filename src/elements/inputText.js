import React from 'react'
import Radium from 'radium'
import colors from '../colors'

const styles = {
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.border,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    boxShadow: 'none',
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
    ':focus': {
      borderColor: colors.text
    }
  },
  label: {
    marginBottom: 5
  }
}

class InputText extends React.Component {

  render () {

    return (
      <div>
        <div style={styles.label}>{this.props.label}</div>
        <input
          style={{...styles.input, ...this.props.style}}
        />
      </div>
    )
  }
}

export default Radium(InputText)
