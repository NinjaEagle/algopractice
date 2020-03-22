var isPowerOfFour = function(num) {
	//      objective- return a boolean based on the input number to see if it's divisible by 4
	//     if it's divisible
	//     input - number. Can be negative number too.
	// ouput -return true if it is a power of 4 or false if it's not

	if ((Math.log(num) / Math.log(4)) % 1 == 0) {
		return true;
	} else {
		return false;
	}
};
