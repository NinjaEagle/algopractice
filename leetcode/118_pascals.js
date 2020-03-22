// Leetcode 118.Pascal's Triangle https://leetcode.com/problems/pascals-triangle/
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
//  @param {number} numRows
// @return {number[][]}

var generate = function(numRows) {

    // first row of result array
    let result=[[1]]
    // it there are no rows
    if (numRows===0) return [];
    //condition if there is a row
    if (numRows===1) return result;
    result.push([1,1])
    // 2 rows condition
    if (numRows===2) return result
    // for loop i starting from 2 up to the total num or rows
    for (let i=2; i<numRows; i++){
        let last=result[result.length-1]
        // creating a temp array to form a new row after the current row
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