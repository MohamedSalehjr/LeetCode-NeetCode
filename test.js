function breadthFirsthSearch() {
  let currentNode = this.root;

<<<<<<< Updated upstream
  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.val);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}

function DFSInorder(list) {
  if (node.left) {
    DFSInorder(node.left, list);
  }
  list.push(node.value);

  if (node.right) {
    DFSInorder(node.right);
  }

  return list;
}

function DFSPreorder(list) {
  list.push(node.value);
  if (node.left) {
    DFSPreorder(node.left);
  }
  if (node.right) {
    DFSPreorder(node.right);
  }
  return list;
}

function DFSPostorder(list) {
  if (node.left) {
    DFSPostorder(node.left);
  }
  if (node.right) {
    DFSPostorder(node.right);
  }
  list.push(node.value);

  return list;
}

function isBalanced(root) {
  return this.dfs(root)[0] === 1;
}

function dfs(root) {
  if (!root) {
    return [1, 0];
  }

  const left = this.dfs(root.left);
  const right = this.dfs(root.right);

  const balanced =
    left[0] === 1 && right[0] === 1 && Math.abs(left[1] - right[1]) <= 1;
  const height = 1 + Math.max(left[1], right[1]);

  return [balanced ? 1 : 0, height];
}
=======
let nums = [1,1,1,1]

function test(nums){
    console.log(nums)
}


test(nums)
>>>>>>> Stashed changes
