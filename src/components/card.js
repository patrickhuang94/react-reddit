import React from 'react'

import {get} from 'lodash'
import moment from 'moment'
import TimeAgo from 'react-timeago'

const styles = {
  cardContainer: {
    display: 'flex',
    backgroundColor: 'white',
    padding: '14px 0px 10px 0px',
    marginBottom: '15px'
  },
  scoreContainer: {
    padding: '10px',
    minWidth: '50px'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: '15px'
  },
  titleText: {
    margin: '0',
    color: 'blue'
  },
  thumbnail: {
    width: '100px',
    height: '100px'
  },
  scoreStyle: {
    fontSize: 16,
    color: 'gray'
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
    // console.log({createdAt, dateNow})
    // const start = moment(createdAt,'HH:mm:ss')
    // const minutesPassed = moment().diff(start, 'minutes')

    return (
      <div style={styles.cardContainer} key={index}>
        <div style={styles.scoreContainer}>
          <p style={styles.scoreStyle}>{score}</p>
        </div>

        <div>
          <img src={thumbnail} style={styles.thumbnail} />
        </div>

        <div style={styles.titleContainer}>
          <p style={styles.titleText}>{title}</p>
          <p style={{marginBottom: 0, marginTop: 0}}>Posted 3 hours ago by r/{author}</p>
        </div>

      </div>
    )
  }
}

export default Card
