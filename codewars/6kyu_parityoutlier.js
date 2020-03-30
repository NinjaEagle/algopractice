// 6kyu Find the Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
	//your code here
	//   input: integers
	// output: only one integer
	let oddIntegers = []
	let evenIntegers = []
	for (let val of integers) {
		if (val % 2 == 0 || val === 0) {
			evenIntegers.push(val)
		} else {
			oddIntegers.push(val)
		}
	}
	if (evenIntegers.length == 1) return evenIntegers[0]
	else return oddIntegers[0]
}

// Refactored solution
// function findOutlier(integers) {
//   let oddInts = integers.filter(val => val % 2 !== 0);
//   let evenInts =integers.filter(val => val % 2 == 0 || val == 0);
//   return evenInts.length == 1? evenInts[0]: oddInts[0]
// }
