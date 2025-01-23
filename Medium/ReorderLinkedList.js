function reorderList(head) {
  if (!head) return;

  const nodes = [];
  let cur = head;
  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }

  let i = 0,
    j = nodes.length - 1;
  while (i < j) {
    nodes[i].next = nodes[j];
    i++;
    if (i >= j) break;
    nodes[j].next = nodes[i];
    j--;
  }

  nodes[i].next = null;
}
