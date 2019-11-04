// Codewars Simple Fun #136 Missing Values
// https://www.codewars.com/kata/58a66c208b88b2de660000c3
//  first testcase- input: [1,1,1,2,2,3]
// 1 appears 3 times
// 3 appears 1 time
// x=3
//2 appears 2 times
//y = 2
//objective: return x*x*y
//result: 3*3*2 = 18

//input type info: array => all positive integers, flat array (ie: [1,2,3])
//assumption: return will be positive

//pseudocode
// rearrange array into a hash map
//eg: {keyOfNumValue: countWithinArray}
//eg: {1:3, 2:2, 3:1}
//find the key that matches the value of 2 and assign to variable 'y'
//find the key that matches the value of 1 and assign to variable 'x'
//multiply x*x*y

function missingValues(arr) {
  let x;
  let y;
  let countNum = {};
  for (let i = 0; i < arr.length; i++) {
    if (!countNum[arr[i]]) {
      countNum[arr[i]] = 1;
    } else {
      countNum[arr[i]]++;
    }
  }
  //is an array of the keys in the countNum hash
  let keys = Object.keys(countNum);
  keys.forEach(num => {
    if (countNum[num] === 1) x = num;
    if (countNum[num] === 2) y = num;
  });
  return x * x * y;
}
