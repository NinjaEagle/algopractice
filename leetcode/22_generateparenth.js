// Prob 82 https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function (n) {
	const result = []
	// utilize helper function with initial parameters
	helper(result, '', 0, 0, n)

	return result
}

var helper = function (result, tempStr, open, close, n) {
	if (tempStr.length === n * 2) {
		result.push(tempStr)
		return
	}
	// if open less than the number of pairs add a open parenthesis and increase the count by 1
	if (open < n) helper(result, tempStr + '(', open + 1, close, n)
	// same with closing
	if (close < open) helper(result, tempStr + ')', open, close + 1, n)
}
