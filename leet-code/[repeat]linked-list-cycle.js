import { head, ListNode } from '../data-structures/linked-list'

let head2 = new ListNode(1)

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (!head) {
    return false
  }

  let slowPointer = head
  let fastPointer = head

  while (slowPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next

    if (slowPointer === fastPointer) {
      return true
    }
  }

  return false
}

console.log(hasCycle(head))
console.log(hasCycle(head2))