https://binarysearch.io/problems/Partition-tree
// Given the root to a binary tree root, return a list of two numbers where the first number is the number of leaves in the tree and the second number is the number of internal (non-leaf) nodes.

// Example 1
// Input

// root = {val: 1, left: {val: 5, left: null, right: null}, right: {val: 3, left: null, right: null}}
// Output

// [2, 1]
class Solution {
  solve(root) {
      // Write your code here
      let leaves = 0;
      let internals = 0;
      let q = [];
      if(root!= null){
          q.push(root)
      }
      //keep iterating until queue is empty
      while(q.length > 0){
          let temp = q.shift();
          console.log(temp);
          if(temp.left == null && temp.right == null){
          leaves ++}
          else if (temp.left != null && temp.right != null){
              internals++;
              q.push(temp.left);
              q.push(temp.right)
          }
          else if (temp.left == null){
              internals++;
              q.push(temp.right);
          }
          else {
              internals++;
              q.push(temp.left)
          }
          console.log(leaves, internals);
      }
      let result = [];
      result[0] = leaves;
      result[1] = internals;
      return result;
  }
}