import React from 'react'
import { connect } from 'react-redux'
import colors from '../colors'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

import { updateCurrentSubreddit } from '../actions'

const styles = () => ({
  categoriesContainer: {
    height: '100%',
    marginLeft: 30,
    border: `1px solid ${colors.lightGray}`,
  },
  listRoot: {
    padding: 0,
  },
  listItemText: {
    marginLeft: 15,
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
      <List className={classes.listRoot}>
        <ListItem button selected={this.props.selectedCategory === 'all'} onClick={() => this.handleCategorySelect('all')}>
          <i className="fas fa-home"></i>
          <div className={classes.listItemText}>All</div>
        </ListItem>
        <Divider />
        <ListItem button selected={this.props.selectedCategory === 'popular'} onClick={() => this.handleCategorySelect('popular')}>
          <i className="fas fa-heart"></i>
          <div className={classes.listItemText}>Popular</div>
        </ListItem>
        <Divider />
        <ListItem button selected={this.props.selectedCategory === 'random'} onClick={() => this.handleCategorySelect('random')}>
          <i className="fas fa-random"></i>
          <div className={classes.listItemText}>Random</div>
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