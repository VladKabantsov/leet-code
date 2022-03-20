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

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0

