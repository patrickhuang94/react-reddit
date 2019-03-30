import React from 'react'
import { connect } from 'react-redux'

import SidePanel from './sidePanel'
import { fetchSettings, fetchMe, updateCurrentSettingsOption } from '../actions'
import colors from '../colors'

const styles = {
	settingsContainer: {
		display: 'flex',
		margin: '20px 10vw',
		backgroundColor: colors.lightestGray,
	},
	settingsContent: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		border: `1px solid ${colors.lightGray}`,
		padding: 10,
	},
	settings: {
		fontSize: 14,
		borderBottom: `1px solid ${colors.lightGray}`,
	},
}

const mapDispatchToProps = (dispatch) => ({
	fetchMe: () => dispatch(fetchMe()),
	fetchSettings: () => dispatch(fetchSettings()),
	updateCurrentSettingsOption: ({ settingsOption }) => dispatch(updateCurrentSettingsOption({ settingsOption })),
})

const mapStateToProps = (state) => ({
	currentSettingsOption: state.ui.currentSettingsOption,
})

class Settings extends React.Component {
	state = {
		settingOptions: [
			{ category: 'login', icon: 'fas fa-home', name: 'Login & Password' },
			{ category: 'personal', icon: 'fas fa-heart', name: 'Personal Info' },
		],
	}

	componentDidMount() {
		this.props.fetchMe()
		this.props.fetchSettings()
	}

	handleOptionSelect = (option) => () => {
		this.props.updateCurrentSettingsOption({ settingsOption: option })
	}

	render() {
		return (
			<div style={styles.settingsContainer}>
				<SidePanel
					items={this.state.settingOptions}
					selectedRow={this.props.currentSettingsOption}
					handleSelect={this.handleOptionSelect}
					title="Edit Profile"
				/>
				<div style={styles.settingsContent}>
					<div style={styles.settings}>Settings</div>
				</div>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings)
