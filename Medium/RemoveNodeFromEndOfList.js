function removeNthFromEnd(head, n) {
  let i = 0;
  let curr = head;

  let list = [];

  while (curr) {
    list.push(curr);
    curr = curr.next;
  }

  let index = list.length - n;

  if (index === 0) {
    return head.next;
  }

  list[index - 1].next = list[index].next;
  return head;
}
