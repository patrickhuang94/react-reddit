import React, {PropTypes} from 'react'

const styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, .65)'
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    height: '60%',
    backgroundColor: 'white'
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 50
  },
  closeButton: {
    fontSize: 28,
    margin: 15,
    cursor: 'pointer'
  }
}

class Modal extends React.Component {

  render () {

    return (
      <div style={{...styles.base, ...this.props.style}}>
        <div style={styles.modal}>
          <div style={styles.header}>
            <span 
              style={styles.closeButton}
              onClick={this.props.handleClose}
            >
              <i className="fas fa-times"></i>
            </span>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal
