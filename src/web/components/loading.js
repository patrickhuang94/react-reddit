import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  loading: {
    height: '100vh',
    marginTop: '10%',
    textAlign: 'center',
  },
}

const Loading = () => (
  <div style={styles.loading}>
    <CircularProgress /> 
  </div>
)

export default Loading