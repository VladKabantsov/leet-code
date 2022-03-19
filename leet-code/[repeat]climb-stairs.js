/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n === 1) return 1

  let n1 = 1
  let n2 = 2
  const arrayLength = (n + 1) - 3

  for (let _ of Array(arrayLength)) {
    [n1, n2] = [n2, n1 + n2]
  }

  return n2
}

console.log(climbStairs(3))
console.log(climbStairs(2))