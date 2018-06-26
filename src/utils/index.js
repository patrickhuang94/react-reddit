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

// Private methods
function insert (str, index, value) {
  return str.substr(0, index) + value + str.substr(index)
}

function replace (str, index, value) {
  return str.substr(0, index) + value
}
