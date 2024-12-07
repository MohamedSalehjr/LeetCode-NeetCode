
function breadthFirsthSearch() {
  let currentNode = this.root;

  let list = []
  let queue = []
  queue.push(currentNode)

  while (queue.length > 0) {
    currentNode = queue.shift()
    list.push(currentNode.val)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }
}
