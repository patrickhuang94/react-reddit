import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Modal from '../../elements/modal'
import InputText from '../../elements/inputText'
import Button from '../../elements/button'
import {hideModal} from '../../actions'

const styles = {
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
    margin: '0 auto'
  },
  signInText: {
    fontSize: 18,
    marginBottom: 15
  },
  textField: {
    marginBottom: 25,
    minWidth: 200
  },
  buttonStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%'
  }
}

class Login extends React.Component {

  handleCloseModal = () => {

		this.props.hideModal('login')
	}

  renderInputFields () {

    return (
      <div>
        <InputText
          label="Email"
          style={styles.textField}
        />
        <InputText
          label="Password"
          style={styles.textField}
        />
      </div>
    )
  }

  render () {

    return (
      <Modal handleClose={this.handleCloseModal}>
        <div style={styles.modalContent}>
          <div style={styles.signInText}>Sign In</div>
          {this.renderInputFields()}
          <Button
            uppercase
            title="login"
            size="medium"
            style={styles.buttonStyle}
          />
        </div>
      </Modal>
    )
  }
}

function mapDispatchToProps (dispatch) {

	return bindActionCreators({hideModal}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
