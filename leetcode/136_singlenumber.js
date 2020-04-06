// 136 Easy https://leetcode.com/problems/single-number/

const singleNumber = nums => {
	//     input is an array
	//     output is a single integer
	const hash = {}
	for (let i of nums) {
		if (!hash[i]) {
			hash[i] = 1
		} else {
			hash[i] += 1
		}
	}
	for (key in hash) {
		if (hash[key] === 1) {
			return key
		}
	}
}
