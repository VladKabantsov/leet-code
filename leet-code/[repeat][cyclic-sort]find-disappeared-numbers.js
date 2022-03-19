/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  let idx = 0

  while (idx < nums.length) {
    const position = nums[idx] - 1

    if (nums[idx] !== nums[position]) {
      [nums[idx], nums[position]] = [nums[position], nums[idx]]
    } else {
      idx++
    }
  }

  return nums.reduce((acc, val, idx) => {
    if (val !== idx + 1) {
      acc.push(idx + 1)
    }

    return acc
  }, [])
}

console.log(findDisappearedNumbers([1, 1])) // [2]
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]