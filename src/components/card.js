import React from 'react'

import {get} from 'lodash'
import moment from 'moment'
import TimeAgo from 'react-timeago'

import colors from '../colors'

const styles = {
  cardContainer: {
    display: 'flex',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: '15px'
  },
  scoreContainer: {
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
  }
}

class Card extends React.Component {

  render () {

    const {post, index} = this.props
    const thumbnail = get(post, ['data', 'thumbnail'])
    const title = get(post, ['data', 'title'])
    const score = get(post, ['data', 'score'])
    const createdAt = get(post, ['data', 'created'])
    const dateNow = Math.floor(Date.now() / 1000)
    const time = createdAt - dateNow
    const author = get(post, ['data', 'author'])
    const subreddit = get(post, ['data', 'subreddit'])
    // const start = moment(createdAt,'HH:mm:ss')
    // const minutesPassed = moment().diff(start, 'minutes')

    return (
      <div style={styles.cardContainer} key={index}>
        <div style={styles.scoreContainer}>{score}</div>
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

export default Card
