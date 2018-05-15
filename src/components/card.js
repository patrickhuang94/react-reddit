import React from 'react'

import {get} from 'lodash'

const styles = {
  cardContainer: {
    display: 'flex',
    margin: '20px 10px',
    height: '100px'
  },
  scoreContainer: {
    padding: '10px'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px',
    backgroundColor: 'yellow'
  },
  thumbnail: {
    width: '100px',
    height: '100px'
    // width: '100%',
    // height: '100%'
  }
}

class Card extends React.Component {

  render () {

    const {post, index} = this.props

    const thumbnail = get(post, ['data', 'thumbnail'])
    const title = get(post, ['data', 'title'])
    const score = get(post, ['data', 'score'])
    const createdAt = get(post, ['data', 'created'])

    return (
      <div style={styles.cardContainer} key={index}>
        <div style={styles.scoreContainer}>
          <p>{score}</p>
        </div>

        <div>
          <img src={thumbnail} style={styles.thumbnail} />
        </div>

        <div style={styles.titleContainer}>
          <p>{title}</p>
          <p>Submitted {createdAt} ago</p>
        </div>


      </div>
    )
  }
}

export default Card
