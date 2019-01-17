import React from 'react'
import { connect } from 'react-redux'
import { get, isEmpty } from 'lodash'

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
  titleAuthorContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleText: {
    color: colors.darkBlue,
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 8
  },
  thumbnail: {
    width: 100,
    height: 100
  },
  subreddit: {
    marginLeft: 4,
    color: colors.redditOrange
  },
  postedBy: {
    fontSize: 12,
    color: colors.darkGray,
    marginBottom: 5
  },
  username: {
    marginLeft: 4,
    color: colors.redditOrange
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
    color: colors.red,
    border: `1px solid ${colors.red}`,
    textAlign: 'center'
  },
  commentsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  commentsCount: {
    color: colors.redditOrange,
    border: `1px solid ${colors.redditOrange}`,
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
    fontSize: 13
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
          {score}
        </div>
      )
    }

    return (
      <div style={styles.scoreContainer}>
        <div style={styles.arrow}><i className="fas fa-arrow-up"></i></div>
        {score}
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

  renderPostedBy () {
    const { post } = this.props
    const timeNowInMs = Math.floor(Date.now() / 1000)
    const postedTime = post.created_utc
    const displayTimeInHours = Math.floor((timeNowInMs - postedTime) / 60 / 60)
    const subreddit = get(post, 'subreddit')

    return (
      <div style={styles.postedBy}>
        posted {displayTimeInHours} hours ago by
        <span style={styles.username}>{post.author}</span> to
        <span style={styles.subreddit}>{`r/${subreddit}`}</span>
      </div>
    )
  }

  renderCommentsCount () {
    const { post } = this.props
    const count = digitsRounder(get(post, 'num_comments'))

    return (
      <div style={styles.commentsCount}>
        {count} comments
      </div>
    )
  }

  render () {
    const { post, index } = this.props
    const title = get(post, 'title')
    const score = digitsRounder(get(post, 'score'))

    return (
      <div style={styles.cardContainer} key={index}>
        {this.renderScore(score)}
        {this.renderThumbnail()}
        <div style={styles.contentContainer}>
          <div style={styles.titleAuthorContainer}>
            <div style={styles.titleText}>{title}</div>
            {this.renderPostedBy()}
          </div>
          {this.renderCommentsCount()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Card)