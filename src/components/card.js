import React from 'react'

import {get} from 'lodash'
import moment from 'moment'
import TimeAgo from 'react-timeago'

const styles = {
  cardContainer: {
    display: 'flex',
    // margin: '10px',
    margin: '10px 25px',
    height: '90px',
    border: '1px solid black'
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
    padding: '15px',
    backgroundColor: 'yellow'
  },
  thumbnail: {
    width: '90px',
    height: '90px'
  },
  scoreStyle: {
    fontSize: 16,
    color: 'gray'
  }
}

class Card extends React.Component {

  render () {

    const {post, index} = this.props
    console.log({post})
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
          <p style={{margin: 0}}>{title}</p>
          <p style={{marginBottom: 0}}>Posted 3 hours ago by r/{author}</p>
        </div>

      </div>
    )
  }
}

export default Card
