import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
})

const Notification = (props) => (
  <Snackbar
    classes={props.classes.snackbar}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={props.isOpen}
    autoHideDuration={3000}
    onClose={props.onClose}
    message={props.message}
    action={[
      <IconButton
        color="inherit"
        className={props.classes.close}
        onClick={props.onClose}
      >
        <CloseIcon className={props.classes.icon} />
      </IconButton>
    ]}
  />
)

export default withStyles(styles)(Notification)