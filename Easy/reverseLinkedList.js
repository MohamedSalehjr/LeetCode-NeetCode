/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// create a dummy node that points to null/
// loop through linkedlist pointing each element to prev value starting off by pointing head to null 
// return previous at the end since that will be the begining of the reversed list
//
// null, 1 ,3, 4, 5, 6

function reverseList(head) {

  let curr = head;
  let prev = null;

  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr
    curr = temp;

  }

  return prev;
}
