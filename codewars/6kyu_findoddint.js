// 6 kyu Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
	//   store array and make a hash
	hashMap = {}
	// create a for loop for each element in array
	for (i = 0; i < A.length; i++) {
		if (hashMap[A[i]]) {
			hashMap[A[i]] += 1
		} else {
			hashMap[A[i]] = 1
		}
	}
	console.log(hashMap)
	//    find the odd value
	// find the key of the odd val
	return parseInt(Object.keys(hashMap).find(key => hashMap[key] % 2 > 0))
}
