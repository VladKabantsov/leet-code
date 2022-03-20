/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let maxSum = nums[0]
  let currentSum = nums[0]

  for (let num of nums.slice(1)) {
    currentSum = Math.max(currentSum + num, num)
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6 [4, -1, 2, 1]
console.log(maxSubArray([1])) // 1 [1]

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// [-2]
// [-2, 1]