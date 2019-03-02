import React from 'react'
import { connect } from 'react-redux'
import Notification from './notification'
import { votePost } from '../actions/vote'
import colors from '../colors'
import { digitsRounder } from '../utils'
import { isEmpty } from 'lodash'

const styles = {
  postContainer: {
    display: 'flex',
    backgroundColor: 'white',
    borderBottom: `1px solid ${colors.lightGray}`,
  },
  scoreContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 7,
    paddingRight: 7,
    minWidth: 30,
    color: colors.darkGray,
    borderRight: `1px solid ${colors.lightGray}`,
  },
  thumbnailAndInfoContainer: {
    display: 'flex',
    margin: 15,
  },
  score: {
    fontSize: 12,
  },
  thumbnailContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleAuthorContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleText: {
    color: colors.darkBlue,
    fontWeight: 500,
    fontSize: 17,
    marginBottom: 8
  },
  thumbnail: {
    maxWidth: 80,
    maxHeight: 80,
    width: 'auto',
    height: 'auto',
  },
  secondaryTextContainer: {
    display: 'flex',
    fontSize: 13,
    color: colors.darkGray,
    marginBottom: 5
  },
  secondaryText: {
    fontSize: 13,
    marginLeft: 4,
  },
  arrow: {
    fontSize: 20,
    color: colors.darkestGray,
    cursor: 'pointer',
    ':hover': {
      color: 'white',
      cursor: 'pointer'
    }
  },
  nsfw: {
    fontSize: 12,
    color: colors.red,
    border: `1px solid ${colors.red}`,
    textAlign: 'center',
    position: 'absolute',
    top: 67,
    width: '98%',
    marginBottom: 6,
  },
  commentsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  commentsCount: {
    color: colors.redditOrange,
    fontSize: 13,
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  votePost: ({ fullNameId, direction }) => dispatch(votePost({ fullNameId, direction }))
})

class Post extends React.Component {
  state = {
    isSnackbarOpen: false,
  }

  handleVote = () => (direction) => {
    if (isEmpty(this.props.user)) {
      return this.setState({ isSnackbarOpen: true })
    }

    this.props.votePost({
      fullNameId: this.props.post.name,
      direction,
    })
  }

  handleCloseSnackbar = () => {
    this.setState({ isSnackbarOpen: false })
  }

  renderScore (score) {
    return (
      <div style={styles.scoreContainer}>
        <div style={styles.arrow} onClick={this.handleVote('1')}>
          <i className="fas fa-angle-up" />
        </div>
        <div style={styles.score}>{score}</div>
        <div style={styles.arrow} onClick={this.handleVote('-1')}>
          <i className="fas fa-angle-down" />
        </div>
      </div>
    )
  }

  renderThumbnail (postType) {
    let thumbnail = postType
    const thumbnailContainerStyle = !thumbnail 
      ? styles.thumbnailContainer 
      : {...styles.thumbnailContainer, marginRight: 15 }

    if (postType === 'self' || postType === 'default') {
      thumbnail = require('../images/text-icon.png')
    } else if (postType === 'nsfw' || postType === 'image') {
      thumbnail = require('../images/reddit-icon.png')
    }

    return (
      <div style={thumbnailContainerStyle}>
        <img src={thumbnail} style={styles.thumbnail} />
        {postType === 'nsfw' && <div style={styles.nsfw}>nsfw</div>}
      </div>
    )
  }

  renderPostContent (post) {
    const commentsCount = digitsRounder(post.num_comments)
    const timeNowInMs = Math.floor(Date.now() / 1000)
    const postedTime = post.created_utc
    const displayTimeInHours = Math.floor((timeNowInMs - postedTime) / 60 / 60)

    return (
      <div style={styles.contentContainer}>
        <div style={styles.titleAuthorContainer}>
          <div style={styles.titleText}>{post.title}</div>
          <div style={styles.secondaryTextContainer}>
            <div style={styles.commentsCount}>{commentsCount} comments</div>
            <div style={styles.secondaryText}>
              u/{post.author} to {`r/${post.subreddit}`} {displayTimeInHours} hours ago
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { post, index } = this.props
    const score = digitsRounder(post.score)
    return (
      <div style={styles.postContainer} key={index}>
        {this.renderScore(score)}
        <div style={styles.thumbnailAndInfoContainer}>
          {this.renderThumbnail(post.thumbnail)}
          {this.renderPostContent(post)}
        </div>
        <Notification 
          isOpen={this.state.isSnackbarOpen}
          onClose={this.handleCloseSnackbar}
          message="Please log in to vote on posts!"
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
