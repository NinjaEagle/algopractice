// 344 leetcode
// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
	//     input is an array
	//     output is an array with the string that is being reversed
	if (s.length == 0) return [];
	//     idx of 1 is the beginning while index 2 starts at end
	let idx1 = 0,
		idx2 = s.length - 1;
	while (idx1 < idx2) {
		// if indexes are different from each other, swap
		if (s[idx1] !== s[idx2]) {
			let temp = s[idx1];
			s[idx1] = s[idx2];
			s[idx2] = temp;
		}
		idx1++;
		idx2--;
	}
};
