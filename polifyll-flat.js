const arr = [[1, 2, 3, [4, 5, 6, [7, 8]], 9], 0]

const flat = (arr) => {
  const res = []

  for (let el of arr) {
    const isArray = Array.isArray(el)

    if (isArray) {
      res.push(...el)
    } else {
      res.push(el)
    }
  }

  const isNotFlattedObj = res.some(el => Array.isArray(el))

  return isNotFlattedObj ? flat(res) : res
}

const flatByStack = (arr) => {
  const stack = [...arr]
  const res = []

  while (stack.length > 0) {
    const next = stack.pop()

    if (Array.isArray(next)) {
      stack.push(...next)
    } else {
      res.push(next)
    }
  }

  return res.reverse()
}

console.log(flatByStack(arr))