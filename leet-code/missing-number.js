/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const length = nums.length
  const sumOfArr = nums.reduce((acc, val) => acc + val, 0)
  const sumOfSubsequence = length * (length + 1) / 2

  return sumOfSubsequence - sumOfArr
}

console.log(missingNumber([3, 0, 1]))