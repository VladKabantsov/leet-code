const { ListNode } = require('../data-structures/linked-list')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

let node0 = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(2)
let node3 = new ListNode(1)

node0.next = node1
node1.next = node2
node2.next = node3

const reverseLinkedList = (head) => {
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

const middleOfTheLinkedList = (head) => {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

function isPalindrome (head) {
    const middle = middleOfTheLinkedList(head)
    let reverse = reverseLinkedList(middle)
    let front = head

    while (reverse) {
        if (reverse.val !== front.val) {
            return false
        }

        reverse = reverse.next
        front = front.next
    }

    return true
}

console.log(isPalindrome(node0))