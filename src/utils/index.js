import {isUndefined, get} from 'lodash'
import {pipe, path, filter, reduce, values} from 'ramda'

export function digitsRounder (digits) {

  if (isUndefined(digits)) {
    return
  }

  const digitString = digits.toString()

  if (digitString.length > 3) {
    const decimal = insert(digitString, digitString.length - 3, '.')
    return replace(decimal, digitString.length - 1, 'k')
  }

  return digitString
}

export function formatResponse (data) {

  const response = path(['data', 'data', 'children'])(data)

  const formattedPosts = reduce((acc, post) => {

    const filteredPost = path(['data'])(post)

    acc.posts = [...acc.posts, filteredPost]
    return acc
  }, {posts: []})(values(response))

  return formattedPosts
}

export const openRedditOAuth = () => {

  const REDDIT_CLIENT_ID = 'LeltpchMUToy9w' // TODO: Put in .env
  // const REDIRECT_URI = 'https://patrickhuang94.github.io/react-reddit/oauth'
  const REDIRECT_URI = 'http://e54fa876.ngrok.io/oauth'
  const url = `https://www.reddit.com/api/v1/authorize?client_id=${REDDIT_CLIENT_ID}&response_type=code&state=random_string_here&redirect_uri=${REDIRECT_URI}&duration=permanent&scope=identity`
  // open reddit oauth page
  window.location.assign(url)
}

// Private methods
function insert (str, index, value) {
  return str.substr(0, index) + value + str.substr(index)
}

function replace (str, index, value) {
  return str.substr(0, index) + value
}
