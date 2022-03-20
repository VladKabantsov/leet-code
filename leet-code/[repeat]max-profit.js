/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minPrice = prices[0]

  return prices.slice(1).reduce((maxProfit, price) => {
    minPrice = Math.min(minPrice, price)

    return Math.max(maxProfit, price - minPrice)
  }, 0)
}

const maxProfitTwoPointers = (prices) => {
  let maxProfit = 0
  let left = 0
  let right = 1

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]

      maxProfit = Math.max(maxProfit, profit)
      console.log({ profit })
    } else {
      left = right
    }

    right++
  }

  return maxProfit
}

// console.log(maxProfitTwoPointers([7, 1, 5, 3, 6, 4])) // 5
// console.log(maxProfitTwoPointers([7, 6, 4, 3, 1])) // 0
console.log(maxProfitTwoPointers([1, 2])) // 1
