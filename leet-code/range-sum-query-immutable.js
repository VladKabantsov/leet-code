/**
 * @param {number[]} nums
 */
// const NumArray = function (nums) {
//   this.nums = nums
// }
const NumArray = function (nums) {
  this.sums = []
  let sum = 0

  for (let num of nums) {
    sum += num
    this.sums.push(sum)
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// NumArray.prototype.sumRange = function (left, right) {
//   return this.nums.slice(left, right + 1).reduce((acc, value) => {
//     return acc + value
//   }, 0)
// }
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) {
    return this.sums[right]
  }

  return this.sums[right] - this.sums[left - 1]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const obj = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(obj.sumRange(0, 2)) // 1
console.log(obj.sumRange(2, 5)) // -1
console.log(obj.sumRange(0, 5)) // -3