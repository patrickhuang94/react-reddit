import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Modal from '../../elements/modal'
import {hideModal} from '../../actions'

const styles = {
  modalContent: {
    display: 'flex',
    marginLeft: 120
  },
  signInText: {
    fontSize: 18
  }
}

class Login extends React.Component {

  handleCloseModal = () => {

		this.props.hideModal('login')
	}

  render () {

    return (
      <Modal handleClose={this.handleCloseModal}>
        <div style={styles.modalContent}>
          <div style={styles.signInText}>Sign In</div>
        </div>
      </Modal>
    )
  }
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({hideModal}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
