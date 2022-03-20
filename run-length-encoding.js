const data = 'aaababbcbbb' // a3b1a1b2c1b3

const runLengthEncoding = (str) => {
  const splittedStr = str.split('')
  let res = ''
  let currentStr = splittedStr[0]

  for (let symbol of splittedStr.splice(1)) {
    if (symbol === currentStr[0]) {
      currentStr += symbol
    } else {
      res += `${currentStr[0]}${currentStr.length}`
      currentStr = symbol
    }
  }

  return res
}

console.log(runLengthEncoding(data))