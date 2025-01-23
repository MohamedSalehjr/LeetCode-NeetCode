function hasCycle(head) {
  let curr = head;

  let linkedMap = new Map();

  while (curr) {
    if (linkedMap.has(curr) && linkedMap.get(curr) === curr.next) {
      return true;
    }
    linkedMap.set(curr, curr.next);
    curr = curr.next;
  }
  return false;
}
