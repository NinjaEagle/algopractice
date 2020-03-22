// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

var singleNumber = function(nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]] = hashMap[nums[i]] + 1;
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  return Object.keys(hashMap).find(key => hashMap[key] === 1);
};