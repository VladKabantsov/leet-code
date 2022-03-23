const { ListNode } = require('../data-structures/linked-list')

let node0 = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(2)
let node3 = new ListNode(1)

node0.next = node1
node1.next = node2
node2.next = node3

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    let current = head
    let prev = null

    while (current) {
        if (current.val === val) {
           if (head.val === val) {
               head = head.next
               current = head
               continue
           }

           prev.next = current.next
        } else {
            prev = current
        }

        current = current.next
    }

    return head
}

const removeElements2 = (head, val) => {
    let fakeNode = new ListNode(val + 1)
    fakeNode.next = head

    let current = fakeNode

    while (current.next) {
        if (current.next.val === val) {
           current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return fakeNode.next
}

console.log(removeElements2(node0, 2))