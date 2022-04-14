const { ListNode } = require('../data-structures/linked-list')

let node0 = new ListNode(1)
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(2)
let node4 = new ListNode(3)
let node5 = new ListNode(3)

node0.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// [1,1,2] -> [1,2]
// [1,1,2,3,3] -> [1,2,3]
const deleteDuplicates = function (head) {
    let currentVal = head.val
    let currentNode = head

    while (currentNode.next) {
      if (currentNode.next.val === currentVal) {
          currentNode.next = currentNode.next.next
      } else {
          currentNode = currentNode.next
          currentVal = currentNode.val
      }
    }

    return head
}

console.log(deleteDuplicates(node0))