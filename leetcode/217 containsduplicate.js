// 217. Contains Duplicate https://leetcode.com/problems/contains-duplicate/
/**
 * @param nums
 * @return boolean
 */
var containsDuplicate = function(nums) {
    //    inputs: num which is an array
    //    output: a boolean true or false
       let set = new Set(nums)
        if (set.size == nums.length) {
            return false
        } else {
            return true
        }
    };