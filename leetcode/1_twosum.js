// Prob 1- Leetcode
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
	// outer for loop for the first number to use for addition
	for (let i = 0; i < nums.length; i++) {
		// second for loop for next number to add to target
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] == target - nums[i]) {
				return [i, j];
			}
		}
	}
};
