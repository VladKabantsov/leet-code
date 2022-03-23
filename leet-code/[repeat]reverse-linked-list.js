const { ListNode } = require('../data-structures/linked-list')

let node0 = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(3)
let node3 = new ListNode(4)
let node4 = new ListNode(5)

node0.next = node1
node1.next = node2
node2.next = node3
node3.next = node4

// [1 -> 2 -> 3 -> 4 -> 5 -> null]
// [null <- 1 <- 2 <- 3 <- 4 <- 5]

const reverseList = function(head) {
    let prev = null
    let current = head

    while (current) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

console.log(reverseList(node0))