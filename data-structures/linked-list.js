function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(3)
let node2 = new ListNode(2)
let node3 = new ListNode(0)
let tail = new ListNode(-4)

head.next = node2
node2.next = node3
node3.next = tail
tail.next = node2

module.exports = { ListNode, head }