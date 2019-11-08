// Leetcode 118.Pascal's Triangle https://leetcode.com/problems/pascals-triangle/
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
//  @param {number} numRows
// @return {number[][]}

var generate = function(numRows) {

    let result=[[1]]
    if (numRows===0) return [];
    if (numRows===1) return result;
    result.push([1,1])
    if (numRows===2) return result
    
    for (let i=2;i<numRows ;i++){
        let last=result[result.length-1]
        let temp=[1]
       for(let j=0; j< last.length-1 ;j++){
           let sum=parseInt(last[j])+ parseInt(last[j+1])
           temp.push(sum)
       }
        temp.push(1)
        result.push(temp)
    }
    return result
 
};