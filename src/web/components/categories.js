import React from 'react'
import { connect } from 'react-redux'
import colors from '../colors'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

import { updateCurrentSubreddit } from '../actions'

const styles = () => ({
  root: {
    padding: 0,
  },
  listItemText: {
    fontSize: 14,
  },
  categoriesContainer: {
    marginLeft: 30,
    border: `1px solid ${colors.lightGray}`,
  },
  content: {
    backgroundColor: 'white',
    minWidth: 230,
    textTransform: 'uppercase',
  },
  categoriesHeader: {
    fontSize: 14,
    borderBottom: `1px solid ${colors.lightGray}`,
    padding: 10,
    textAlign: 'center',
  },
})

const mapStateToProps = (state) => ({
  selectedCategory: state.ui.currentSubreddit,
})

const mapDispatchToProps = (dispatch) => ({
  updateCurrentSubreddit: ({ subreddit }) => dispatch(updateCurrentSubreddit({ subreddit })),
})

class Categories extends React.Component {
  handleCategorySelect = (category) => {
    this.props.updateCurrentSubreddit({ subreddit: category })
  }

  renderCategoryIcons () {
    const { classes } = this.props
    return (
      <List className={classes.root}>
        <ListItem button selected={this.props.selectedCategory === 'all'} onClick={() => this.handleCategorySelect('all')}>
          <i className="fas fa-home"></i>
          <ListItemText primary="All" classes={{text: {fontSize: 14}}} />
        </ListItem>
        <Divider />
        <ListItem button selected={this.props.selectedCategory === 'popular'} onClick={() => this.handleCategorySelect('popular')}>
          <i className="fas fa-heart"></i>
          <ListItemText primary="Popular" />
        </ListItem>
        <Divider />
        <ListItem button selected={this.props.selectedCategory === 'random'} onClick={() => this.handleCategorySelect('random')}>
          <i className="fas fa-random"></i>
          <ListItemText primary="Random" />
        </ListItem>
      </List>
    )
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.categoriesContainer}>
        <div className={classes.content}>
          <div className={classes.categoriesHeader}>Categories</div>
          {this.renderCategoryIcons()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Categories))