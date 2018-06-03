import {isUndefined} from 'lodash'

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

// Private methods
function insert (str, index, value) {
  return str.substr(0, index) + value + str.substr(index)
}

function replace (str, index, value) {
  return str.substr(0, index) + value
}
