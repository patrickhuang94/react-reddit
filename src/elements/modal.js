import React from 'react'

const styles = {
  modal: {
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
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white'
  }
}

class Modal extends React.Component {

  render () {

    return (
      <div style={{...styles.modal, ...this.props.style}}>
        <div style={styles.modalContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
// 
// const Modal = ({ handleClose, show, children }) => {
// 
//   return (
//     <div className={showHideClassname}>
//       <section className="modal-main">
//         {children}
//         <button onClick={handleClose}>close</button>
//       </section>
//     </div>
//   )
// }

export default Modal
