// 701. Insert into a Binary Search Tree https://leetcode.com/problems/insert-into-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root===null){
       root = new TreeNode(val);
       return root;
   }
   if (root.val > val) {
       root.left = insertIntoBST(root.left, val)
   } else {
       root.right = insertIntoBST(root.right, val)
   }
   return root
};