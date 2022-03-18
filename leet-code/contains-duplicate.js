/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const map = {}

  for (let num of nums) {
    if (num in map) {
      return true
    }

    map[num] = 1
  }

  return false
}