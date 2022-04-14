const { ListNode } = require('../data-structures/linked-list')

let node0 = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(4)

let node3 = new ListNode(1)
let node4 = new ListNode(3)
let node5 = new ListNode(4)

node0.next = node1
node1.next = node2

node3.next = node4
node4.next = node5

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    let merged = { val: 0, next: null }
    let res = merged

    while (list1 && list2) {
        const isFirstBigger = list1.val > list2.val;

        if (isFirstBigger) {
            merged.next = new ListNode(list2.val)
            list2 = list2.next
        } else {
            merged.next = new ListNode(list1.val)
            list1 = list1.next
        }

        merged = merged.next
    }

    while (list1) {
        merged.next = new ListNode(list1.val)
        merged = merged.next
        list1 = list1.next
    }

    while (list2) {
        merged.next = new ListNode(list2.val)
        merged = merged.next
        list2 = list2.next
    }

    return res.next
}

const printResults = (list) => {
    const result = []

    while (list.next) {
        result.push(list.val)
        list = list.next
    }

    return result
}

console.log(printResults(mergeTwoLists(node0, node3)))