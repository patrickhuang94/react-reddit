import React from 'react'
import { connect } from 'react-redux'

import { fetchSettings } from '../actions'
import colors from '../colors'

const styles = {
  settingsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 200,
    backgroundColor: colors.lightestGray,
    padding: '0px 15px',
    width: '100%',
  },
  settings: {
    fontSize: 22,
    color: colors.darkGray,
    marginBottom: 20,
    marginTop: 20
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSettings: () => dispatch(fetchSettings())
})

const mapStateToProps = (state) => ({

})

class Settings extends React.Component {
  componentDidMount () {
    this.props.fetchSettings()
  }

  render () {
    return (
      <div style={styles.settingsContainer}>
        <div style={styles.settings}>Settings</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)