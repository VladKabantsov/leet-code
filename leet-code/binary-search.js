const data = [-1, 0, 3, 5, 9, 12]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let middleIdx = Math.ceil((left + right) / 2)
        let middleVal = nums[middleIdx]

        if (middleVal === target) {
            return middleIdx
        }

        if (middleVal < target) {
            left = middleIdx + 1
        } else {
            right = middleIdx - 1
        }
    }

    return -1
}
// [-1, 0, 3, 5, 9, 12]
console.log(search(data, -1))
console.log(search(data, 0))
console.log(search(data, 3))
console.log(search(data, 5))
console.log(search(data, 9))
console.log(search(data, 12))
console.log(search(data, -2))
console.log(search(data, 13))