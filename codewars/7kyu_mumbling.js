// 7 kyu question Mumbling https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
	// first for each index, associate that with each element and repeat certain num of times
	return [...s]
		.map((curr, index) => {
			return curr.toUpperCase().concat(curr.toLowerCase().repeat(index))
		})
		.join('-')
}
