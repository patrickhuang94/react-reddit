import React from 'react'
import { connect } from 'react-redux'

import { get, isEmpty } from 'lodash'
// import moment from 'moment'
// import TimeAgo from 'react-timeago'

import colors from '../../colors'
import { digitsRounder } from '../../utils'

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
  thumbnailContainer: {
    display: 'flex',
    flexDirection: 'column'
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
  },
  nsfw: {
    color: 'red',
    border: '1px solid red',
    textAlign: 'center'
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

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

  renderThumbnail () {
    const { post } = this.props
    let thumbnail = post.thumbnail
    if (post.thumbnail === 'self' || post.thumbnail === 'default') {
      thumbnail = require('../../images/text-icon.png')
    }
    if (post.thumbnail === 'nsfw' || post.thumbnail === 'image') {
      thumbnail = require('../../images/reddit-icon.png')
    }

    return (
      <div style={styles.thumbnailContainer}>
        <img src={thumbnail} style={styles.thumbnail} />
        {post.thumbnail === 'nsfw' && <div style={styles.nsfw}>nsfw</div>}
      </div>
    )
  }

  renderTimestamp () {
    const { post } = this.props
    const timeNowInMs = Math.floor(Date.now() / 1000)
    const postedTime = post.created_utc
    const displayTimeInHours = Math.floor((timeNowInMs - postedTime) / 60 / 60)
    return (
      <div>
        posted {displayTimeInHours} hours ago
        <span style={styles.username}> u/{post.author}</span>
      </div>
    )
  }

  render () {
    const { post, index } = this.props
    const title = get(post, 'title')
    const score = digitsRounder(get(post, 'score'))
    const subreddit = get(post, 'subreddit')

    return (
      <div style={styles.cardContainer} key={index}>
        {this.renderScore(score)}
        {this.renderThumbnail()}
        <div style={styles.contentContainer}>
          <div>
            <div style={styles.titleText}>{title}</div>
            {this.renderTimestamp()}
          </div>
          <div style={styles.subreddit}>
            r/{subreddit}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Card)
