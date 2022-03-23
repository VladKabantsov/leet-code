const { ListNode } = require('../data-structures/linked-list')

// [1,2,3,4,5] 3
// [1,2,3,4,5,6] 6
let node0 = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(3)
let node3 = new ListNode(4)
let node4 = new ListNode(5)
let node5 = new ListNode(6)

node0.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}
// [1, 2, 3, 4, 5]
// s, f = 2, 3
// s, f = 3, 5
// m = 3 (slow)

// [1, 2, 3, 4, 5, 6]
// s, f = 2, 3
// s, f = 3, 5
// m = 4 (slow.next)
console.log(middleNode(node0))