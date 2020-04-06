// Prob 122 Easy https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = prices => {
	//     input is an array of prices
	//     output is a number an integer
	let maxProfit = 0

	for (let i = 1; i < prices.length; i++) {
		//if the price of the day is greater than the day before, add that to maxProfit
		if (prices[i] > prices[i - 1]) {
			maxProfit += prices[i] - prices[i - 1]
		}
	}
	return maxProfit
}
