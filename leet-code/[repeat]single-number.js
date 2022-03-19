/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const map = {}

  for (let num of nums) {
    if (num in map) {
      delete map[num]
      continue
    }

    map[num] = 1
  }

  const [singleNumber] = Object.keys(map)

  return Number(singleNumber)
}

const singleNumberXOR = (nums) => {
  let mask = 0

  for (let num of nums) {
    mask ^= num
  }

  return mask
}

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
console.log(singleNumber([1])) // 1

console.log(singleNumberXOR([2, 2, 1])) // 1
console.log(singleNumberXOR([4, 1, 2, 1, 2])) // 4
console.log(singleNumberXOR([1])) // 1
