// Given a singly linked list, return its length. The linked list has fields next and val.
// Example 1
// Input

// node = 350 → null
// Output

// 1
// Explanation

// This linked list has 1 node.
/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
	solve(node) {
		// Write your code here
		let length = 0
		while (node != null) {
			length++
			node = node.next
		}
		return length
	}
}
