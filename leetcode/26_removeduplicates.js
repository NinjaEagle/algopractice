// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    var i = 0;
    nums.forEach(function (elem) {
//         If the specific element is not equal to the number at position i, assign the next element in the array to be equal to the element as well as increasing the count of i by 1
        if (elem !== nums[i]) {
            nums[++i] = elem;
        }
    });
        return nums.length && i + 1;
};