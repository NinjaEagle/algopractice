// Given a singly linked list node, and an integer target, return the same linked list with all nodes whose value is target removed.

// Input

// node = 0 → 1 → 1 → 2 → null
// target = 1

// Output

// 0 → 2 → null

class Solution {
	solve(node, target) {
		// if the head of the node is null, return the node
		if (node == null) {
			return node
		}

		//We don't want the starting node to begin the LL with a node.val == target
		while (node && node.val == target) {
			node = node.next
		}
		let temp
		if (node.val != target) {
			// assign a temp LL to head
			temp = node
		}
		//Iterate down the LL while a node exists,
		//but only if its val == target
		while (temp && temp.next) {
			// make temp to the next node
			if (temp.next.val == target) {
				temp.next = temp.next.next
			}
			// reassign node's next value to the first value not equal to the target
			else temp = temp.next
		}
		//return the node
		return node
	}
}
