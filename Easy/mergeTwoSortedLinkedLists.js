//Definition for singly-linked list.
// class ListNode {
// constructor(val = 0, next = null) {
//        this.val = val;
//         this.next = next;
//    }
//  }
//

// Can be solved recursively
//
// Base Case one of the lists is empty so return the other 
// recursive case check if list1 value is smaller than list2 value 
// if it is recursively call the function again calling the next value of list 1 and the same value of list2
// Do the same for list2 
// after the recursive call return the list node
//

function mergeTwoLists(list1, list2) {

  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }


}
