import React from 'react'
import {connect} from 'react-redux'

import {path, isEmpty} from 'ramda'
import moment from 'moment'
import TimeAgo from 'react-timeago'

import colors from '../../colors'
import {digitsRounder} from '../../utils'

const styles = {
  cardContainer: {
    display: 'flex',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: '15px'
  },
  scoreContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    minWidth: '50px',
    fontSize: 16,
    color: colors.darkGray
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 10
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: '15px'
  },
  titleText: {
    color: colors.darkBlue,
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 8
  },
  thumbnail: {
    width: '100px',
    height: '100px'
  },
  subreddit: {
    border: `1px solid ${colors.darkGray}`,
    padding: '5px 8px'
  },
  username: {
    color: colors.blue
  },
  arrow: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    color: colors.darkestGray,
    cursor: 'pointer',
    ':hover': {
      color: 'white',
      cursor: 'pointer'
    }
  }
}

class Card extends React.Component {

  renderScore (score) {

    if (isEmpty(this.props.user)) {
      return (
        <div style={styles.scoreContainer}>
          <div>{score}</div>
        </div>
      )
    }

    return (
      <div style={styles.scoreContainer}>
        <div style={styles.arrow}><i className="fas fa-arrow-up"></i></div>
          <div>{score}</div>
        <div style={styles.arrow}><i className="fas fa-arrow-down"></i></div>
      </div>
    )
  }

  render () {

    const {post, index} = this.props
    const thumbnail = path(['thumbnail'])(post)
    const title = path(['title'])(post)
    const score = digitsRounder(path(['score'])(post))
    const createdAt = path(['created'])(post)
    const dateNow = Math.floor(Date.now() / 1000)
    const time = createdAt - dateNow
    const author = path(['author'])(post)
    const subreddit = path(['subreddit'])(post)
    // const start = moment(createdAt,'HH:mm:ss')
    // const minutesPassed = moment().diff(start, 'minutes')

    return (
      <div style={styles.cardContainer} key={index}>
        {this.renderScore(score)}
        <img src={thumbnail} style={styles.thumbnail} />
        <div style={styles.contentContainer}>
          <div>
            <div style={styles.titleText}>{title}</div>
            <div>
              posted 3 hours ago by
              <span style={styles.username}> u/{author}</span>
            </div>
          </div>
          <div style={styles.subreddit}>
            r/{subreddit}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {

  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Card)
