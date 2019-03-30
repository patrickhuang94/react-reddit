import React from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
	container: {
		height: '100%',
		marginRight: 30,
		border: `1px solid ${colors.lightGray}`,
	},
	content: {
		backgroundColor: 'white',
		minWidth: 230,
		textTransform: 'uppercase',
	},
	listRoot: {
		padding: 0,
	},
	listItemText: {
		marginLeft: 15,
	},
	title: {
		fontSize: 14,
		borderBottom: `1px solid ${colors.lightGray}`,
		padding: 10,
		textAlign: 'center',
	},
})

class SidePanel extends React.Component {
	static propTypes = {
		items: PropTypes.array,
		selectedRow: PropTypes.string,
		handleSelect: PropTypes.func,
		title: PropTypes.string,
	}

	renderContent = () => {
		const { classes } = this.props
		return (
			<List className={classes.listRoot}>
				{this.props.items.map((item) => (
					<React.Fragment>
						<ListItem
							button
							selected={this.props.selectedRow === item.category}
							onClick={this.props.handleSelect(item.category)}
						>
							<i className={item.icon} />
							<div className={classes.listItemText}>{item.name}</div>
						</ListItem>
						<Divider />
					</React.Fragment>
				))}
			</List>
		)
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.container}>
				<div className={classes.content}>
					<div className={classes.title}>{this.props.title}</div>
					{this.renderContent()}
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(SidePanel)
